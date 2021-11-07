import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image'
import Link from './Link'
import { Box, Container, Divider, Grid, List, ListItem } from '@mui/material'


interface Props {

}

export const Footer = (props: Props) => {
  return (
    <>
      <Divider sx={{ mt: 4 }} />
      <Container maxWidth='md' sx={{ my: 2 }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <List>
            <ListItem>
              <Link href='/about'>О сайте</Link>
            </ListItem>
            <ListItem>

              <Link href='mailto:bk-korona-rate@tagir-a.com'><MailIcon /></Link>
              <Box sx={{ ml: 1 }} />
              <Link rel="noreferrer" href='https://instagram.com/netyaneangel'><InstagramIcon /></Link>
            </ListItem>
          </List>
          <Image src="/made-in-russia-sign-ru.png" alt='Знак "Сделано в России"' width={233} height={70} />
        </Box>
      </Container>
    </>

  )
}
