// File: app/tools/roi-wellness/components/CashflowChart.jsx
'use client';

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function CashflowChart({ canvasRef, cashflows, currency, formatCurrency }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef?.current || !cashflows?.monthly || !cashflows?.cumulative) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Destroy existing chart if any
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const months = Array.from({ length: cashflows.monthly.length }, (_, i) => i);

    const breakEvenIndex = cashflows.cumulative.findIndex(v => v >= 0);
    const breakEvenData = breakEvenIndex > 0 ? [{ x: breakEvenIndex, y: cashflows.cumulative[breakEvenIndex] }] : [];

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Monthly Cash Flow',
            data: cashflows.monthly,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.2)',
            tension: 0.3,
            fill: true,
            yAxisID: 'y',
          },
          {
            label: 'Cumulative Cash Flow',
            data: cashflows.cumulative,
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            tension: 0.3,
            yAxisID: 'y',
          },
          {
            label: 'Break-even',
            data: breakEvenData,
            borderColor: '#ef4444',
            borderWidth: 0,
            pointBackgroundColor: '#ef4444',
            pointRadius: 5,
            type: 'scatter',
            showLine: false,
            yAxisID: 'y',
          }
        ]
      },
      options: {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: {
            title: { display: true, text: 'Cash Flow' },
            ticks: {
              callback: value => formatCurrency(Number(value))
            },
            grid: { color: 'rgba(148, 163, 184, 0.2)' }
          },
          x: {
            title: { display: true, text: 'Month' },
            grid: { color: 'rgba(148, 163, 184, 0.2)' }
          }
        },
        plugins: {
          legend: { labels: { usePointStyle: true } }
        }
      }
    });

    // Cleanup
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [canvasRef, cashflows, currency, formatCurrency]);

  return <canvas ref={canvasRef} className="w-full h-72" />;
}