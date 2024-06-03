import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChartComponent = ({ data }) => {
    const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
    
    
      const categorys = data.map(entry => entry['alert'].category);
    //   const signatureId = data.map(entry => entry['alert'].signature_id);

      const potentiallyBadTraffic = data.filter(entry => entry.alert.category === "Potentially Bad Traffic").map(entry => entry.flow_id);
      const attemptedInfoLeak = data.filter(entry => entry.alert.category === "Attempted Information Leak").map(entry => entry.flow_id);
      const miscAttack = data.filter(entry => entry.alert.category === "Misc Attack").map(entry => entry.flow_id);

      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
      const ctx = document.getElementById('myChart-Doughnut');
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        drawTicks:'true',
        data: {
          labels: categorys,
          datasets: [
            {
                label: 'Grid',
                data: potentiallyBadTraffic,
                fill: false,
                backgroundColor: 'rgb(122, 111, 190, 0.9)',
                borderColor: 'rgba(122, 111, 190, 0.1)',
              },
              {
                label: 'Grid',
                data: attemptedInfoLeak,
                fill: false,
                backgroundColor: 'rgb(43, 108, 134, 0.9)',
                borderColor: 'rgba(43, 108, 134, 0.1)',
              },
              {
                  label: 'Misc Attack',
                  data: miscAttack,
                  fill: false,
                  backgroundColor: 'rgb(75, 192, 192, 0.9)',
                  borderColor: 'rgba(75, 192, 192, 0.1)',
              },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: true,
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
                }
              }
            }
          }
        },
      });
    }
  }, [data]);

  return <canvas id="myChart-Doughnut"></canvas>;
};

export default DoughnutChartComponent;