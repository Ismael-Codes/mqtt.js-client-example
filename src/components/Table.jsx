import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import jsonFile from '../assets/data.json'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 200,
    editable: true,
  },
  {
    field: 'edad',
    headerName: 'Edad',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'peso',
    headerName: 'Peso',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'estatura',
    headerName: 'Estatura',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'covid',
    headerName: '¿Tiene COVID?',
    type: 'boolean',
    width: 250,
    editable: true,
  }
];
const { data } = jsonFile;

export const Table = () => {
  return (
    <Box sx={{ height: 680, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  )
}
