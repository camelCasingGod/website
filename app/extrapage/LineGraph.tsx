'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const generateData = (count: number, min: number, max: number) =>
  Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );

const red = 'rgb(255, 99, 132)';
const blue = 'rgb(54, 162, 235)';

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateData(7, -100, 100),
      borderColor: red,
      backgroundColor: 'rgba(255, 99, 132, 0.5)', // transparent red
    },
    {
      label: 'Dataset 2',
      data: generateData(7, -100, 100),
      borderColor: blue,
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // transparent blue
    },
  ],
};

export default function LineGraph() {
    // chartData state and rendering...
    return <Line data={data} />;
  }