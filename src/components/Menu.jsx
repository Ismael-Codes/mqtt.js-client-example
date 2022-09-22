import { Box, Typography } from '@mui/material'
import React from 'react'
import { Ambos } from './Ambos'
import { ConCovid } from './ConCovid'
import { SinCovid } from './SinCovid'

export const Menu = ({ alignment }) => {
  return (
    <>
      {alignment == 'conCovid' && (<ConCovid />)}
      {alignment == 'sinCovid' && (<SinCovid />)}
      {alignment == 'ambos' && (<Ambos />)}
      {alignment == '' && (<Typography variant='h6'>Favor de <strong>seleccionar</strong> alguna de las opciones disponibles.</Typography>)}
    </>
  )
}

