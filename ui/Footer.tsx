import React from 'react'
import Image from 'next/image'
import Link from './Link'
import { Box, Container, Divider, Grid } from '@mui/material'


interface Props {

}

export const Footer = (props: Props) => {
  return (
    <>
      <Divider sx={{ mt: 4 }} />
      <Container maxWidth='md' sx={{ my: 2 }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Link href='/about'>О сайте</Link>
          <Image src="/made-in-russia-sign-ru.png" alt='Знак "Сделано в России"' width={233} height={70} />
        </Box>
      </Container>
    </>

  )
}
