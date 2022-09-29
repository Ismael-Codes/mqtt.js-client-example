import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import jsonFile from '../assets/data.json'

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 50 },
  {
    field: 'NOM',
    headerName: 'Nombre',
    minWidth: 200,
    flex: 1,
    editable: false,
  },
  {
    field: 'PES',
    headerName: 'Peso',
    type: 'number',
    minWidth: 50,
    flex: 1,
    editable: false,
    renderCell: (params) => (
      `${params.row.PES}kg`
    )
  },
  {
    field: 'EST',
    headerName: 'Estatura',
    type: 'number',
    minWidth: 50,
    flex: 1,
    editable: false,
    renderCell: (params) => (
      `${params.row.EST}m`
    )
  },
  {
    field: 'COV',
    headerName: '¿Tiene COVID?',
    type: 'boolean',
    minWidth: 150,
    flex: 1,
    editable: false,
  }
];

export const Table = ({ data }) => {

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
