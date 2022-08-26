import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function DouChart() {
  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: '# of Votes',
        data: [60,20,20],
        backgroundColor: [
          'rgba(166, 253, 52, 0.4)',
          'rgba(203, 115, 21, 0.4)',
          'rgba(165, 187, 213, 0.4)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <Doughnut data={data} />
  );
}
