import React from 'react'
import Image from 'next/image'
import Link from './Link'
import { Grid } from '@mui/material'


interface Props {

}

export const Footer = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Link href='/about'>О сайте</Link>
      </Grid>
      <Grid item xs={4}>
        <Image src="/made-in-russia-sign-ru.png" alt='Знак "Сделано в России"' width={233} height={70} />
      </Grid>
    </Grid>

  )
}
