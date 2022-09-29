import React from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



export const DoughnutChart = ({ labelHelper2, dataHelper2 }) => {

  const data = {
    labels: labelHelper2,
    datasets: [
      {
        label: '# of Votes',
        data: dataHelper2,
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

  return (
    <Box sx={{ bgcolor: 'white', borderRadius: 3 }}>
      <Doughnut data={data} height="600px"
        width="600px"
        options={{ maintainAspectRatio: false }} />
    </Box>
  )
}
