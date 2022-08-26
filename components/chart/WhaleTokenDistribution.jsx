import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // responsive: true,
  plugins: {
    legend: {
      // position: 'top',
      // position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'DAO Rate',
      data: [1,4,3,4,2,6,7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [1,4,3,4,2,6,7],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function BarChart() {
  return <Bar style={{height: "300px"}} options={options} data={data} />;
}
