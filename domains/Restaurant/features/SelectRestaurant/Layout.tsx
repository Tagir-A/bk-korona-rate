import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Restaurant } from '../../Restaurant'

interface Props {
  restaurants: Restaurant[]
}

export const Layout = ({ restaurants }: Props) => {
  const [state, setState] = useState(String(restaurants[0].id))

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Ресторан</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        label="Age"
        onChange={handleChange}
      >
        {restaurants.map(restaurant => (
          <MenuItem key={restaurant.id} value={restaurant.id}>{restaurant.name}</MenuItem>

        ))}
      </Select>
    </FormControl>
  )
}
