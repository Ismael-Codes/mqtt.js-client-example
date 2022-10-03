import { Box, Typography } from '@mui/material'
import React from 'react'
import { Ambos } from './Ambos'
import { ConCovid } from './ConCovid'
import { SinCovid } from './SinCovid'

export const Menu = ({ alignment, conCovid, sinCovid, show }) => {
  return (
    <>
      {alignment == 'conCovid' && (<ConCovid conCovid={conCovid} />)}
      {alignment == 'sinCovid' && (<SinCovid sinCovid={sinCovid} />)}
      {alignment == 'ambos' && (<Ambos conCovid={conCovid} sinCovid={sinCovid} />)}
      {alignment == '' && show[0] == true && (<Typography variant='h6'>Favor de <strong>seleccionar</strong> alguna de las opciones disponibles.</Typography>)}
    </>
  )
}

