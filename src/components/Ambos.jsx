import React from 'react';
import { PieChart } from './PieChart';
import { DoughnutChart } from './DoughnutChart';
import { Table } from './Table';
import { Grid, Typography } from '@mui/material';

export const Ambos = () => {
  return (
    <>
      <Grid item container justifyContent="center"
        alignItems="center" xs={12}>
        <Typography variant='h4'>
          Con <strong>COVID</strong>
        </Typography>
      </Grid>
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

      <Grid item container justifyContent="center"
        alignItems="center" xs={12} sx={{ marginTop: 4 }} >
        <Typography variant='h4'>
          Sin <strong>COVID</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ bgcolor: 'white', borderRadius: 3, marginBottom: 2 }}>
        <Table />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <DoughnutChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>
      </Grid>
    </>
  )
}
