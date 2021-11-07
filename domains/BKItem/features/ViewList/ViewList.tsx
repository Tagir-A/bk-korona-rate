import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { BKItem } from '../../BKItem'

interface Props {
  data: BKItem[]

}

export const ViewList = ({ data }: Props) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemText sx={{ flex: '1 1 50%', p: 0.5 }} primary='Название' />
        <ListItemText sx={{ flex: '1 1 25%', p: 0.5, textAlign: 'end' }} primary='Цена в ₽' />
        <ListItemText sx={{ flex: '1 1 25%', p: 0.5, textAlign: 'end' }} primary='Цена в 👑' />
        <ListItemText sx={{ flex: '1 1 25%', p: 0.5, textAlign: 'end' }} primary={'Курс 👑 к ₽'} />
      </ListItem>
      {data.map(item => (
        <ListItem key={item.title} disablePadding>
          <ListItemText sx={{ flex: '1 1 50%', p: 0.5, }} primary={item.title} />
          <ListItemText sx={{ flex: '1 1 25%', p: 0.5, textAlign: 'end' }} primary={item.price} />
          <ListItemText sx={{ flex: '1 1 25%', p: 0.5, textAlign: 'end' }} primary={item.koronaPrice} />
          <ListItemText sx={{ flex: '1 1 25%', p: 0.5, textAlign: 'end' }} primary={item.rate} />
        </ListItem>
      ))}


    </List>
  )
}
