import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (data && data.length > 0) {
      const timestamps = data.map(entry => entry.timestamp);
      const flowIds = data.map(entry => entry.flow_id);

      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
      const ctx = document.getElementById('myChart');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        drawTicks: 'true',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: 'Flow ID',
              data: flowIds,
              fill: false,
              backgroundColor: 'rgb(75, 192, 192)',
              borderColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio:true,
          scales: {
           
            x: {
              grid: {
                display: false,
                color: '#adb5bd', 
              },
              ticks: {
                color: '#adb5bd' // Tick label color
              }
            },
            y: {
              
              grid: {
                color: '#adb5bd', // Axis line color
                drawTicks: true,
                stepSize: 8,
              },
              ticks: {
                color: '#adb5bd', // Tick label color
              }
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas id="myChart" width="200" height="50"></canvas>;
};

export default LineChartComponent;






