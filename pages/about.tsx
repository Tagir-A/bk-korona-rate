import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Link as ExternalLink, Typography } from '@material-ui/core'
import { NextLinkComposed } from '../ui/Link'
import { DonateCard } from '../ui/DonateCard'
import { DonateMobile } from '../ui/DonateMobile'
import { DonateWallet } from '../ui/DonateWallet'
import { Container } from '@mui/material'



const About: NextPage = () => {
  return (
    < >
      <Head>
        <title>О сайте</title>
        <meta name="description" content="Небольшое пояснение что этот сайт из себя представляет и зачем" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth='md'>
        <Box sx={{ mt: 2 }} />
        <Typography variant='h2' component='h1' >
          О сайте
        </Typography>
        <Box sx={{ mt: 2 }} />
        <Box maxWidth={700}>
          <Typography>
            Всем привет! Я и моя сестра решили сделать этот сайт, чтобы немного отвлечься.
            Мы заметили, что в БК предложения по коронам имеют разную ценность, сделали табличку и решили поделиться с теми, кому это интересно.
          </Typography>
          <Box sx={{ mt: 2 }} />
          <Typography>
            Если вы хотите поддержать этот проект или просто оплатить кофе студентке — ниже кнопки для доната.
          </Typography>
          <Box sx={{ mt: 2 }} />

          <DonateCard />
          <DonateMobile />
          <DonateWallet />
          <Box sx={{ mt: 2 }} />
          <Typography component='p' variant='caption'>Кстати, этот сайт не отслеживает куки и все такое. Есть немного аналитики от <ExternalLink href='https://panelbear.com/' rel="noreferrer">Панель Беар</ExternalLink>, но они обещают не собирать никаких данных пользователей</Typography>
          <Box sx={{ mt: 2 }} />

          <Button component={NextLinkComposed} to='/' color='primary' variant="contained">На главную</Button>
        </Box>

      </Container>
    </>
  )
}

export default About