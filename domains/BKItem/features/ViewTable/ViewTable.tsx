import React from 'react'
import * as Panelbear from "@panelbear/panelbear-js";
import { DataGrid, GridColumns } from '@mui/x-data-grid';

type BKItem = {
  title: string,
  price: number,
  koronaPrice: number,
  rate: string
}

interface Props {
  data: BKItem[]
}

export const ViewTable = ({ data }: Props) => {
  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'title', headerName: 'Название', flex: 200 },
    { field: 'price', headerName: 'Цена в ₽', type: 'number', flex: 100 },
    {
      field: 'koronaPrice',
      headerName: 'Цена в 👑',
      type: 'number',
      flex: 100
    },
    {
      field: 'rate',
      headerName: 'Курс 👑 к ₽',
      type: 'number',
      flex: 100,
    },
  ];

  const rows = data.map((item, i) => ({ ...item, id: i }))
  return (
    <div style={{ height: 400, width: '100%', maxWidth: 900 }}>
      <DataGrid
        onCellClick={(params) => {
          Panelbear.track(`Cell clicked: ${params.formattedValue}`)
        }}
        onColumnHeaderClick={(params) => {
          Panelbear.track(`Column header clicked: ${params.field}`)
        }}
        onColumnVisibilityChange={(params) => {
          Panelbear.track(`Column visibility changed: ${params.field} to ${params.isVisible}`)
        }}
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
