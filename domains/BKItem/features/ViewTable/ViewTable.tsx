import React from 'react'
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
  console.log('rows', rows)
  return (
    <div style={{ height: 400, width: '100%', maxWidth: 900 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
