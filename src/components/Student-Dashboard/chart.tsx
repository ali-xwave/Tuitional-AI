"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Category 1',
      data: [70, 50, 60, 50, 70, 65, 55, 55, 60, 70, 55, 45],
      backgroundColor: '#4fe3c1',
      borderRadius: 10,
      borderWidth: 2,
    },
    {
      label: 'Category 2',
      data: [40, 35, 50, 30, 65, 45, 50, 40, 55, 60, 45, 35],
      backgroundColor: '#f99b95',
      borderRadius: 10,
      borderWidth: 2,
    },
    {
      label: 'Category 3',
      data: [60, 45, 55, 40, 70, 55, 60, 50, 65, 65, 55, 45],
      backgroundColor: '#facf65',
      borderRadius: 10,
      borderWidth: 2,
    }
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows the chart to take full height of its container
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 80,
      ticks: {
        color: '#AAAAAA',
        stepSize: 5,
        precision: 0,
      },
    },
    x: {
      ticks: {
        color: '#AAAAAA',
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
};

const BarChart = () => {
  return (
    <Box sx={{
      width: '70%',
      backgroundColor: '#1C1E1E',
      padding: '10px',
      borderRadius: '10px',
      height: '25vh' // Increased height slightly
    }}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;
