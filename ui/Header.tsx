import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

interface Props {

}

export const Header = (props: Props) => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>
          Курс корон БК к рублю
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
