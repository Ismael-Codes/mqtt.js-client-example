import React from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Box } from '@mui/material';

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderWidth: 1,
    },
  ],
};

export const ConCovid = () => {
  return (
    <>
      <Pie data={data} height="700px"
        width="700px"
        options={{ maintainAspectRatio: false }} />
      {/* <Doughnut data={data} /> */}
      {/* <PolarArea data={data} /> */}
    </>
  )
}
