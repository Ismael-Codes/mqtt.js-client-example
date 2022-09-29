import React from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PieChart = ({ labelHelper, dataHelper }) => {

  const helper = {
    labels: labelHelper,
    datasets: [
      {
        label: '# of Votes',
        data: dataHelper,
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
      <Pie data={helper} height="600px"
        width="400px"
        options={{
          maintainAspectRatio: false
        }} />
    </Box>
  )
}
