// File: app/tools/roi-wellness/components/ScenarioChart.jsx
'use client';

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function ScenarioChart({ canvasRef, comparisons, formatCurrency, formatPercent }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef?.current || !comparisons?.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Destroy existing chart if any
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: comparisons.map(c => c.scenario),
        datasets: [
          {
            label: 'ROI (12 months, %)',
            data: comparisons.map(c => c.ROI_12),
            backgroundColor: 'rgba(59, 130, 246, 0.7)',
            yAxisID: 'y1'
          },
          {
            label: 'NPV (24 months)',
            data: comparisons.map(c => c.NPV_24),
            backgroundColor: 'rgba(34, 197, 94, 0.7)',
            yAxisID: 'y2'
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y1: {
            position: 'left',
            title: { display: true, text: 'ROI %' },
            ticks: {
              callback: value => `${Number(value).toFixed(0)}%`
            }
          },
          y2: {
            position: 'right',
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'NPV' },
            ticks: {
              callback: value => formatCurrency(Number(value))
            }
          }
        },
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    // Cleanup
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [canvasRef, comparisons, formatCurrency]);

  return <canvas ref={canvasRef} className="w-full h-72" />;
}