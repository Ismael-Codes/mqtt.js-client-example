import React from 'react';
import { PieChart } from './PieChart';
import { DoughnutChart } from './DoughnutChart';
import { Table } from './Table';
import { Grid } from '@mui/material';


export const SinCovid = () => {
  return (
    <>
      <Grid item xs={12} sx={{ bgcolor: 'white', borderRadius: 3, marginBottom: 2 }}>
        <Table />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <DoughnutChart />
        </Grid>
      </Grid>
    </>
  )
}
