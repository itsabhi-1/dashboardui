import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const portCounts = data.reduce((acc, entry) => {
      const port = entry.dest_port;
      if (acc[port]) {
        acc[port]++;
      } else {
        acc[port] = 1;
      }
      return acc;
    }, {});

    const labels = Object.keys(portCounts);
    const values = Object.values(portCounts);

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myBarChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Alerts',
            data: values,
            backgroundColor: 'rgba(122, 111, 190, 0.9)',
            borderColor: 'rgba(122, 111, 190, 0.6)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: true,
              color: '#adb5bd',
            },
            ticks: {
              color: '#adb5bd' // Tick label color
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#adb5bd', // Axis line color
              drawTicks: true,
            },
            ticks: {
              color: '#adb5bd', // Tick label color
              stepSize: 50,
            }
          }
        }
      }
    });
  }, [data]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <canvas id="myBarChart"></canvas>
    </div>
  );
};

export default BarChartComponent;