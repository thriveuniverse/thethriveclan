'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Chart } from 'chart.js/auto'; // Ensure chart.js is installed: npm i chart.js

// Import Tailwind if not global; assume it's set up in globals.css
// For theme, we'll handle dark mode via class

// Extract DEFAULT_INPUTS and other constants from the original script
const DEFAULT_INPUTS = {
  currency: "€",
  DISCOUNT_RATE_ANNUAL: 0.08,
  AVG_APPT_PRICE: 70,
  AVG_SESSIONS_PER_CLIENT: 6,
  MONTHLY_NEW_CLIENTS: 45,
  RETENTION_RATE: 0.65,
  STAFF_HOURLY_COST: 28,
  ADMIN_HOURS_SAVED_PER_APPT: 0.15, // hours
  NO_SHOW_RATE_BASELINE: 0.17,
  NO_SHOW_RATE_AFTER: 0.12,
  BILLING_ERROR_RATE_BASELINE: 0.05,
  BILLING_ERROR_RATE_AFTER: 0.02,
  CAC_BASELINE: 35,
  CONVERSION_RATE_SITE_TO_BOOK: 0.035,
  CONVERSION_RATE_AFTER_UPGRADES: 0.055,
  ONE_OFF_SETUP: 1500,
  TRAINING_COST: 600,
  MONTHLY_SOFTWARE_SUBS: 240,
  PAYMENT_FEES_RATE: 0.025,
  ADOPTION_RATE: 0.65,
};

const SCENARIO_MULTIPLIERS = {
  Conservative: { clients: 0.90, admin: 0.80 },
  Base: { clients: 1.00, admin: 1.00 },
  Aggressive: { clients: 1.15, admin: 1.20 },
};

// ROI Logic Functions (ported directly from the module)
const rateFields = new Set([
  'DISCOUNT_RATE_ANNUAL',
  'RETENTION_RATE',
  'NO_SHOW_RATE_BASELINE',
  'NO_SHOW_RATE_AFTER',
  'BILLING_ERROR_RATE_BASELINE',
  'BILLING_ERROR_RATE_AFTER',
  'PAYMENT_FEES_RATE',
  'ADOPTION_RATE'
]);

const minuteField = 'ADMIN_HOURS_SAVED_PER_APPT';

function _calculateDerivedQuantities(inputs) {
  const appts_per_month = inputs.MONTHLY_NEW_CLIENTS * inputs.AVG_SESSIONS_PER_CLIENT;
  const completed_appts_after = appts_per_month * (1 - inputs.NO_SHOW_RATE_AFTER);
  const revenue_after_monthly = completed_appts_after * inputs.AVG_APPT_PRICE;

  const time_savings_hours_per_month = inputs.ADMIN_HOURS_SAVED_PER_APPT * completed_appts_after * inputs.ADOPTION_RATE;
  const time_savings_value_per_month = time_savings_hours_per_month * inputs.STAFF_HOURLY_COST;

  const completed_appts_baseline = appts_per_month * (1 - inputs.NO_SHOW_RATE_BASELINE);
  const incremental_completed_appts = completed_appts_after - completed_appts_baseline;
  const no_show_regained_revenue_per_month = incremental_completed_appts * inputs.AVG_APPT_PRICE;
  
  const billing_error_savings_per_month = (inputs.BILLING_ERROR_RATE_BASELINE - inputs.BILLING_ERROR_RATE_AFTER) * revenue_after_monthly;

  const gross_benefits_monthly = time_savings_value_per_month + no_show_regained_revenue_per_month + billing_error_savings_per_month;
  
  const payment_fees_monthly = inputs.PAYMENT_FEES_RATE * revenue_after_monthly;
  const opex_monthly = inputs.MONTHLY_SOFTWARE_SUBS + payment_fees_monthly;
  
  const net_cash_flow_monthly = gross_benefits_monthly - opex_monthly;
  const capex_t0 = inputs.ONE_OFF_SETUP + inputs.TRAINING_COST;

  return { capex_t0, net_cash_flow_monthly, gross_benefits_monthly, opex_monthly };
}

function _calculateNPV(cashflows, monthly_discount_rate) {
  if (monthly_discount_rate <= -1) return NaN;
  return cashflows.reduce((acc, cf, m) => {
    return acc + cf / Math.pow(1 + monthly_discount_rate, m);
  }, 0);
}

function _calculateIRR(cashflows, max_iterations = 100, tolerance = 1e-6) {
  if (cashflows.length === 0 || cashflows[0] >= 0) {
    return null;
  }

  let low_rate = -0.99;
  let high_rate = 5.0;
  
  const npvAtLow = _calculateNPV(cashflows, low_rate);
  const npvAtHigh = _calculateNPV(cashflows, high_rate);

  if (npvAtLow * npvAtHigh > 0) {
    return null;
  }
  
  for (let i = 0; i < max_iterations; i++) {
    const mid_rate = (low_rate + high_rate) / 2;
    const npv_at_mid = _calculateNPV(cashflows, mid_rate);

    if (Math.abs(npv_at_mid) < tolerance) {
      return mid_rate;
    }

    if (npvAtLow * npv_at_mid < 0) {
      high_rate = mid_rate;
    } else {
      low_rate = mid_rate;
    }
  }
  
  return null;
}

function applyScenario(baseInputs, scenario) {
  const multipliers = SCENARIO_MULTIPLIERS[scenario];
  const newInputs = { ...baseInputs };

  newInputs.MONTHLY_NEW_CLIENTS *= multipliers.clients;
  newInputs.ADMIN_HOURS_SAVED_PER_APPT *= multipliers.admin;

  return newInputs;
}

function buildCashflows(inputs, horizonMonths = 24) {
  const { capex_t0, net_cash_flow_monthly } = _calculateDerivedQuantities(inputs);
  
  const monthly = [-capex_t0];
  const cumulative = [-capex_t0];

  for (let m = 1; m <= horizonMonths; m++) {
    monthly.push(net_cash_flow_monthly);
    cumulative.push(cumulative[m - 1] + net_cash_flow_monthly);
  }

  return { monthly, cumulative };
}

function computeMetrics(inputs) {
  const { gross_benefits_monthly, capex_t0, opex_monthly } = _calculateDerivedQuantities(inputs);

  const total_benefits_12 = 12 * gross_benefits_monthly;
  const total_costs_12 = capex_t0 + (12 * opex_monthly);
  const net_profit_12 = total_benefits_12 - total_costs_12;
  const ROI_12 = total_costs_12 !== 0 ? (net_profit_12 / total_costs_12) * 100 : Infinity;

  const { monthly: cashflows_24 } = buildCashflows(inputs, 24);
  const monthly_discount_rate = Math.pow(1 + inputs.DISCOUNT_RATE_ANNUAL, 1 / 12) - 1;
  const NPV_24 = _calculateNPV(cashflows_24, monthly_discount_rate);

  const monthly_irr = _calculateIRR(cashflows_24);
  const IRR_annual = monthly_irr !== null ? Math.pow(1 + monthly_irr, 12) - 1 : null;

  const { cumulative: cumulative_cf_24 } = buildCashflows(inputs, 24);
  const paybackIndex = cumulative_cf_24.findIndex(cf => cf >= 0);
  let PaybackMonths = "Never";
  if (paybackIndex > 0) {
    PaybackMonths = paybackIndex;
  }

  return {
    ROI_12,
    NPV_24,
    IRR_annual,
    PaybackMonths,
  };
}

function computeSensitivity(
  inputs,
  minutesList = [3, 4, 5, 6, 7, 8, 10],
  adoptionList = [0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90]
) {
  const matrixNPV = [];

  for (const adoptionRate of adoptionList) {
    const row = [];
    for (const minutes of minutesList) {
      const tempInputs = {
        ...inputs,
        ADMIN_HOURS_SAVED_PER_APPT: minutes / 60,
        ADOPTION_RATE: adoptionRate,
      };
      const metrics = computeMetrics(tempInputs);
      row.push(metrics.NPV_24);
    }
    matrixNPV.push(row);
  }

  return { xMinutes: minutesList, yAdoption: adoptionList, matrixNPV };
}

function compareScenarios(baseInputs) {
  const scenarios = ["Conservative", "Base", "Aggressive"];
  return scenarios.map(scenario => {
    const scenarioInputs = applyScenario(baseInputs, scenario);
    const metrics = computeMetrics(scenarioInputs);
    return {
      scenario,
      ...metrics,
    };
  });
}

// Display fields for inputs
const displayFields = [
  { key: 'AVG_APPT_PRICE', label: 'Average Appointment Price', prefix: true, step: '0.01', min: '0' },
  { key: 'AVG_SESSIONS_PER_CLIENT', label: 'Average Sessions per Client', step: '0.1', min: '0' },
  { key: 'MONTHLY_NEW_CLIENTS', label: 'Monthly New Clients', step: '1', min: '0' },
  { key: 'RETENTION_RATE', label: 'Retention Rate', isRate: true, step: '0.01', min: '0', max: '1' },
  { key: 'STAFF_HOURLY_COST', label: 'Staff Hourly Cost', prefix: true, step: '0.01', min: '0' },
  { key: 'ADMIN_HOURS_SAVED_PER_APPT', label: 'Admin Time Saved per Appointment (minutes)', step: '1', min: '0' },
  { key: 'NO_SHOW_RATE_BASELINE', label: 'No-show Rate Baseline', isRate: true, step: '0.01', min: '0', max: '1' },
  { key: 'NO_SHOW_RATE_AFTER', label: 'No-show Rate After', isRate: true, step: '0.01', min: '0', max: '1' },
  { key: 'BILLING_ERROR_RATE_BASELINE', label: 'Billing Error Rate Baseline', isRate: true, step: '0.01', min: '0', max: '1' },
  { key: 'BILLING_ERROR_RATE_AFTER', label: 'Billing Error Rate After', isRate: true, step: '0.01', min: '0', max: '1' },
  { key: 'ONE_OFF_SETUP', label: 'One-off Setup Cost', prefix: true, step: '1', min: '0' },
  { key: 'TRAINING_COST', label: 'Training Cost', prefix: true, step: '1', min: '0' },
  { key: 'MONTHLY_SOFTWARE_SUBS', label: 'Monthly Software Subscription', prefix: true, step: '1', min: '0' },
  { key: 'PAYMENT_FEES_RATE', label: 'Payment Fees Rate', isRate: true, step: '0.001', min: '0', max: '1' },
  { key: 'DISCOUNT_RATE_ANNUAL', label: 'Annual Discount Rate', isRate: true, step: '0.001', min: '0', max: '1' },
  { key: 'ADOPTION_RATE', label: 'Adoption Rate', isRate: true, step: '0.01', min: '0', max: '1' },
];

// Metrics list
const metricsList = [
  { key: 'ROI_12', label: 'ROI (12 months)' },
  { key: 'NPV_24', label: 'NPV (24 months)' },
  { key: 'IRR_annual', label: 'IRR (annualized)' },
  { key: 'PaybackMonths', label: 'Payback' },
];

// Dynamic Chart imports to avoid SSR issues
const DynamicCashflowChart = dynamic(() => import('./components/CashflowChart'), { ssr: false });
const DynamicScenarioChart = dynamic(() => import('./components/ScenarioChart'), { ssr: false });

export default function RoiWellnessCalculator() {
  const [baseInputs, setBaseInputs] = useState({ ...DEFAULT_INPUTS });
  const [currentScenario, setCurrentScenario] = useState('Base');
  const [currency, setCurrency] = useState('€');
  const [isDark, setIsDark] = useState(false);
  const [metrics, setMetrics] = useState({});
  const [sensitivity, setSensitivity] = useState({});
  const [comparisons, setComparisons] = useState([]);

  const cashflowCanvasRef = useRef(null);
  const scenarioCanvasRef = useRef(null);
  const heatmapCanvasRef = useRef(null);
  const debouncedTimeoutRef = useRef(null);

  // Formatters
  const formatCurrency = useCallback((value) => {
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'symbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return formatter.format(value).replace('€', currency);
  }, [currency]);

  const formatPercent = useCallback((value) => {
    return `${value.toFixed(1)}%`;
  }, []);

  const minutesFromHours = useCallback((hours) => {
    return Math.round(hours * 60);
  }, []);

  const clampRate = useCallback((value) => {
    if (Number.isNaN(value)) return 0;
    return Math.min(1, Math.max(0, value));
  }, []);

  // Handlers
  const handleInputChange = useCallback((key, rawValue) => {
    let value = rawValue;
    if (rateFields.has(key)) {
      value = clampRate(rawValue);
    }
    if (key === minuteField) {
      value = rawValue / 60;
    }

    setBaseInputs(prev => ({ ...prev, [key]: value }));
  }, [clampRate]);

  const triggerUpdate = useCallback(() => {
    if (debouncedTimeoutRef.current) clearTimeout(debouncedTimeoutRef.current);
    debouncedTimeoutRef.current = setTimeout(updateAll, 150);
  }, []);

  const resetInputs = useCallback(() => {
    setBaseInputs({ ...DEFAULT_INPUTS });
    setCurrentScenario('Base');
  }, []);

  const copyInputsToClipboard = useCallback(async () => {
    const inputsForCopy = { ...baseInputs, ADMIN_HOURS_SAVED_PER_APPT: minutesFromHours(baseInputs.ADMIN_HOURS_SAVED_PER_APPT) };
    const text = JSON.stringify(inputsForCopy, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      // Optional: Show toast "Copied!"
    } catch (err) {
      console.error('Failed to copy', err);
    }
  }, [baseInputs, minutesFromHours]);

  const downloadCsv = useCallback(() => {
    const scenarioInputs = applyScenario(baseInputs, currentScenario);
    const cashflows = buildCashflows(scenarioInputs);
    const rows = ['Month,Monthly Cash Flow,Cumulative Cash Flow'];
    cashflows.monthly.forEach((value, index) => {
      const monthly = value;
      const cumulative = cashflows.cumulative[index];
      rows.push(`${index},${monthly.toFixed(2)},${cumulative.toFixed(2)}`);
    });
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cashflows.csv';
    link.click();
    URL.revokeObjectURL(url);
  }, [baseInputs, currentScenario]);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  // Update logic
  const updateAll = useCallback(() => {
    const scenarioInputs = applyScenario(baseInputs, currentScenario);
    scenarioInputs.currency = currency;
    const newMetrics = computeMetrics(scenarioInputs);
    setMetrics(newMetrics);

    const newSensitivity = computeSensitivity({ ...baseInputs, currency });
    setSensitivity(newSensitivity);

    const newComparisons = compareScenarios(baseInputs);
    setComparisons(newComparisons);

    // Update charts via refs or props to dynamic components
  }, [baseInputs, currentScenario, currency]);

  // Effects
  useEffect(() => {
    triggerUpdate();
  }, [baseInputs, currentScenario, currency, triggerUpdate]);

  useEffect(() => {
    if (isDark !== document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  useEffect(() => {
    return () => {
      if (debouncedTimeoutRef.current) clearTimeout(debouncedTimeoutRef.current);
    };
  }, []);

  // Render Inputs
  const renderInputs = useMemo(() => (
    <form className="grid grid-cols-1 gap-4">
      {displayFields.map(field => {
        const value = field.key === minuteField 
          ? minutesFromHours(baseInputs[field.key]) 
          : baseInputs[field.key];
        return (
          <div key={field.key} className="space-y-1">
            <label htmlFor={`input-${field.key}`} className="flex justify-between text-sm font-medium">
              {field.label}
            </label>
            <input
              id={`input-${field.key}`}
              type="number"
              step={field.step}
              min={field.min}
              max={field.max}
              value={value}
              onChange={(e) => handleInputChange(field.key, parseFloat(e.target.value))}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {field.isRate && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Enter a value between 0 and 1.
              </p>
            )}
          </div>
        );
      })}
    </form>
  ), [baseInputs, handleInputChange, minutesFromHours]);

  // Render Metrics
  const renderMetrics = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {metricsList.map(({ key, label }) => {
        let valueText = '';
        if (key === 'ROI_12') {
          valueText = Number.isFinite(metrics[key]) ? formatPercent(metrics[key]) : 'N/A';
        } else if (key === 'NPV_24') {
          valueText = Number.isFinite(metrics[key]) ? formatCurrency(metrics[key]) : 'N/A';
        } else if (key === 'IRR_annual') {
          valueText = metrics[key] === null || !Number.isFinite(metrics[key]) ? 'Negative (no IRR)' : formatPercent(metrics[key] * 100);
        } else if (key === 'PaybackMonths') {
          valueText = metrics[key] === 'Never' ? 'Never' : `${metrics[key]} months`;
        }
        return (
          <div key={key} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition">
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="text-2xl font-semibold">{valueText}</p>
          </div>
        );
      })}
    </div>
  ), [metrics, formatCurrency, formatPercent]);

  // Heatmap Draw Function (use useEffect with ref)
  useEffect(() => {
  if (!heatmapCanvasRef.current || !sensitivity.matrixNPV || sensitivity.matrixNPV.length === 0) return;

    const canvas = heatmapCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth || canvas.width;
    const displayHeight = canvas.clientHeight || canvas.height;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = displayWidth;
    const height = displayHeight;
    ctx.clearRect(0, 0, width, height);

    const padding = 40;
    const cols = sensitivity.xMinutes.length;
    const rows = sensitivity.yAdoption.length;
    const cellWidth = (width - padding * 2) / cols;
    const cellHeight = (height - padding * 2) / rows;

    const allValues = sensitivity.matrixNPV.flat();
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);

    const interpolateColor = (value) => {
      const ratio = maxValue === minValue ? 0.5 : (value - minValue) / (maxValue - minValue);
      const r = Math.round(255 * (1 - ratio));
      const g = Math.round(255 * ratio);
      const b = Math.round(64 * (1 - ratio));
      return `rgb(${r}, ${g}, ${b})`;
    };

    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const value = sensitivity.matrixNPV[row][col];
        const x = padding + col * cellWidth;
        const y = padding + row * cellHeight;
        ctx.fillStyle = interpolateColor(value);
        ctx.fillRect(x, y, cellWidth, cellHeight);
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.1)';
        ctx.strokeRect(x, y, cellWidth, cellHeight);
      }
    }

    // Axes labels (simplified; add full if needed)
    ctx.fillStyle = getComputedStyle(document.body).color;
    // X axis
    sensitivity.xMinutes.forEach((min, col) => {
      const x = padding + col * cellWidth + cellWidth / 2;
      ctx.fillText(`${min} min`, x, height - padding / 2);
    });
    // Y axis
    sensitivity.yAdoption.forEach((adopt, row) => {
      const y = padding + row * cellHeight + cellHeight / 2;
      ctx.save();
      ctx.translate(padding / 2, y);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(`${Math.round(adopt * 100)}%`, 0, 0);
      ctx.restore();
    });

    // Title labels
    ctx.font = '14px sans-serif';
    ctx.fillText('Admin Minutes Saved per Appointment', width / 2, padding / 2);
    ctx.save();
    ctx.translate(padding / 2, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Adoption Rate', 0, 0);
    ctx.restore();

    // Hover (add event listener)
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left - padding;
      const y = event.clientY - rect.top - padding;
      if (x < 0 || y < 0 || x > cols * cellWidth || y > rows * cellHeight) {
        canvas.title = '';
        return;
      }
      const col = Math.floor(x / cellWidth);
      const row = Math.floor(y / cellHeight);
      const value = sensitivity.matrixNPV[row][col];
      const adoption = sensitivity.yAdoption[row];
      const minutes = sensitivity.xMinutes[col];
      canvas.title = `${minutes} min | ${Math.round(adoption * 100)}% adoption → ${formatCurrency(value)}`;
    };
    canvas.onmousemove = handleMouseMove;

    return () => {
      canvas.onmousemove = null;
    };
  }, [sensitivity, formatCurrency]);

  // For cashflow and scenario charts, pass props to dynamic components
  // Assume you create ../components/CashflowChart.jsx and ScenarioChart.jsx with the original Chart configs
  // For example, CashflowChart receives cashflows, currency, formatCurrency as props

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Health & Wellness ROI Calculator</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Model ROI, NPV, IRR, and payback across scenarios.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm font-medium" htmlFor="scenarioSelect">
              Scenario
              <select
                id="scenarioSelect"
                value={currentScenario}
                onChange={(e) => setCurrentScenario(e.target.value)}
                className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Base">Base</option>
                <option value="Conservative">Conservative</option>
                <option value="Aggressive">Aggressive</option>
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm font-medium" htmlFor="currencySelect">
              Currency
              <select
                id="currencySelect"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="€">€</option>
                <option value="$">$</option>
                <option value="£">£</option>
                <option value="¥">¥</option>
              </select>
            </label>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium"
              aria-pressed={isDark}
            >
              <span>{isDark ? '☀️ Light mode' : '🌙 Dark mode'}</span>
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-6">
          <section className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Input Overrides</h2>
                <div className="flex gap-2">
                  <button
                    onClick={resetInputs}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                  >
                    Reset to Base
                  </button>
                  <button
                    onClick={copyInputsToClipboard}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                  >
                    Copy Inputs (JSON)
                  </button>
                </div>
              </div>
              {renderInputs}
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition space-y-3">
              <h2 className="text-lg font-semibold">Exports</h2>
              <button
                onClick={downloadCsv}
                className="w-full text-sm font-medium px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Download Cashflows (CSV)
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {renderMetrics}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cash Flow Projection</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Monthly and cumulative cash flows over 24 months.</p>
              </div>
              <DynamicCashflowChart
                canvasRef={cashflowCanvasRef}
                cashflows={buildCashflows(applyScenario(baseInputs, currentScenario))}
                currency={currency}
                formatCurrency={formatCurrency}
              />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Sensitivity Analysis</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">NPV over admin minutes saved vs. adoption rate.</p>
              </div>
              <div className="overflow-x-auto">
                <canvas
                  ref={heatmapCanvasRef}
                  width="640"
                  height="360"
                  className="w-full max-w-full"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center"><span className="w-4 h-3 rounded bg-red-500"></span> Low NPV</span>
                  <span className="inline-flex items-center"><span className="w-4 h-3 rounded bg-yellow-400"></span> Mid</span>
                  <span className="inline-flex items-center"><span className="w-4 h-3 rounded bg-green-500"></span> High</span>
                </div>
                <span>Hover for values</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Scenario Comparison</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">ROI and NPV across standard scenarios.</p>
              </div>
              <DynamicScenarioChart
                canvasRef={scenarioCanvasRef}
                comparisons={comparisons}
                formatCurrency={formatCurrency}
                formatPercent={formatPercent}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}