import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    description: 'Socket Unique Number',
    type: 'number',
    align: 'center',
  },
  { field: 'value', headerName: 'Value', type: 'number', align: 'center' },
  { field: 'mean', headerName: 'Mean', type: 'number', align: 'center' },
  {
    field: 'std',
    headerName: 'Std. Dev.',
    description: 'Standard Deviation',
    type: 'number',
    align: 'center',
  },
  {
    field: 'timestamp',
    headerName: 'Timestamp',
    sortable: false,
    align: 'center',
  },

  /*{
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },*/
]

export default function DataTable({
  layouts,
  currentBreakpoint,
  allDevicesData,
  onPutItem,
}) {
  return (
    <div
      style={{
        height: '630px',
        minHeight: '300px',
        maxWidth: '530px',
        margin: 'auto',
      }}
    >
      <DataGrid
        rows={allDevicesData}
        columns={columns}
        //autoPageSize={true}
        //disableExtendRowFullWidth={true}
        pageSize={10}
        //rowsPerPageOptions={[10, 25]}
        //checkboxSelection
      />
    </div>
  )
}
