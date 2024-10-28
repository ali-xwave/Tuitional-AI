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

// Registering the required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
  datasets: [
    {
      label: 'Performance Data',
      data: [70, 55, 60, 50, 75, 70, 65, 60, 70, 65],
      backgroundColor: [
        '#f99b95', '#4fe3c1', '#facf65', '#facf65', '#f99b95',
        '#4fe3c1', '#facf65', '#facf65', '#f99b95', '#4fe3c1',
      ],
      borderRadius: 10, // Rounded corners for bars
      borderWidth: 2,
      barThickness: 30, // Control the width (thickness) of bars
      maxBarThickness: 30, // Prevent bars from becoming too thick
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow control over height
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#AAAAAA', // Optional: Change tick color
      },
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      beginAtZero: true, // Ensure the bars start from 0
      max: 100, // Set the max value to 100
      ticks: {
        display: false, // Hide numbers (0 to 100) on y-axis
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)', // Optional: Light grid lines
      },
    },
  },
};

const Chart = () => {
  return (
    <Box sx={{ width: '96%', height: '54vh', margin: '0 auto', borderRadius: "20px", background: "#1E2122" }}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Chart;
