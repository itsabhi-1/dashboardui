import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PolarChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const destPortCounts = data.reduce((acc, entry) => {
      const port = entry.dest_port;
      if (acc[port]) {
        acc[port]++;
      } else {
        acc[port] = 1;
      }
      return acc;
    }, {});

    const labels = Object.keys(destPortCounts);
    const values = Object.values(destPortCounts);

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myPolarChart');
    chartRef.current = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Destination Ports',
            data: values,
            backgroundColor: [
              'rgb(122, 111, 190,0.9)',
              'rgb(40, 187, 227, 0.9)',
              'rgb(77, 77, 118,0.9)',
              'rgba(75, 192, 192,0.9)',
              'rgba(153, 102, 255,0.9)',
              'rgb(43, 108, 134,0.9)'
            ],
            borderColor: [
              'rgba(122, 111, 190, 0.1)',
              'rgba(40, 187, 227, 0.1)',
              'rgb(77, 77, 118, 0.1)',
              'rgba(75, 192, 192, 0.1)',
              'rgba(153, 102, 255, 0.1)',
              'rgba(43, 108, 134, 0.1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            grid: {
              color: '#adb5bd', // Axis line color
              backgroundColor: '#adb5bd',
            },
            ticks: {
              color: 'black', // Change label color
              backgroundColor: '#adb5bd',
          },
          },
        }
      }
    });
  }, [data]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <canvas id="myPolarChart"></canvas>
    </div>
  );
};

export default PolarChartComponent;
