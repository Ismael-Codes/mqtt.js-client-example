import React from 'react';
import { PieChart } from './PieChart';
import { DoughnutChart } from './DoughnutChart';
import { Table } from './Table';
import { Box, Grid, Typography } from '@mui/material';

export const ConCovid = ({ conCovid }) => {

  const data = conCovid;

  let peso = {};
  let estatura = {};

  data.forEach(function (numero) {
    peso[numero.PES] = (peso[numero.PES] || 0) + 1;
  });

  var labelHelper = [];
  var dataHelper = [];

  for (var i in peso) {
    labelHelper.push(i + 'kg')
    dataHelper.push(peso[i])
  }

  data.forEach(function (numero) {
    estatura[numero.EST] = (estatura[numero.EST] || 0) + 1;
  });

  var labelHelper2 = [];
  var dataHelper2 = [];

  for (var i in estatura) {
    labelHelper2.push(i + 'm')
    dataHelper2.push(estatura[i])
  }


  let totalLocation = 0;
  var dataHelperPorcent = [];

  for (var i in dataHelper) {
    totalLocation += dataHelper[i]
  }

  for (var i in dataHelper) {
    dataHelperPorcent.push((dataHelper[i] * 100 / totalLocation).toFixed(3))
  }

  totalLocation = 0;
  var dataHelperPorcent2 = [];

  for (var i in dataHelper2) {
    totalLocation += dataHelper2[i]
  }

  for (var i in dataHelper2) {
    dataHelperPorcent2.push((dataHelper2[i] * 100 / totalLocation).toFixed(3))
  }



  return (
    <>
      <Grid item xs={12} sx={{ bgcolor: 'white', borderRadius: 3, marginBottom: 2 }}>
        <Box sx={{ bgcolor: 'white', borderRadius: 3, marginBottom: 1 }}>
          <Grid item container justifyContent="center"
            alignItems="center" xs={12} >
            <Typography variant='h4'>
              Usuarios totales: {data.length}
            </Typography>
          </Grid>
        </Box>
        <Table data={conCovid} />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'white', borderRadius: 3, marginBottom: 1 }}>
            <Grid item container justifyContent="center"
              alignItems="center" xs={12} >
              <Typography variant='h4'>
                Peso
              </Typography>
            </Grid>
          </Box>
          {/* <PieChart labelHelper={labelHelper} dataHelper={dataHelper} /> */}
          <PieChart labelHelper={labelHelper} dataHelper={dataHelperPorcent} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'white', borderRadius: 3, marginBottom: 1 }}>
            <Grid item container justifyContent="center"
              alignItems="center" xs={12} >
              <Typography variant='h4'>
                Estatura
              </Typography>
            </Grid>
          </Box>
          {/* <DoughnutChart labelHelper2={labelHelper2} dataHelper2={dataHelper2} /> */}
          <DoughnutChart labelHelper2={labelHelper2} dataHelper2={dataHelperPorcent2} />
        </Grid>
      </Grid>
    </>
  )
}
