import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Button, Link as ExternalLink, Typography } from '@material-ui/core'
import { NextLinkComposed } from '../ui/Link'



const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>О сайте</title>
        <meta name="description" content="Небольшое пояснение что этот сайт из себя представляет и зачем" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          О сайте
        </h1>
        <Box maxWidth={700}>
          <Typography>
            Всем привет! Я и моя сестра решили сделать этот сайт, чтобы немного отвлечься.
            Мы заметили, что в БК предложения по коронам имеют разную ценность, сделали табличку и решили поделиться с теми, кому это интересно.
          </Typography>
          <Box sx={{ mt: 2 }} />
          <Typography component='p' variant='caption'>Кстати, этот сайт не отслеживает куки и все такое. Есть немного аналитики от <ExternalLink href='https://panelbear.com/' rel="noreferrer">Панель Беар</ExternalLink>, но они обещают не собирать никаких данных пользователей</Typography>
          <Box sx={{ mt: 2 }} />

          <Button component={NextLinkComposed} to='/' color='primary' variant="contained">На главную</Button>
        </Box>

      </main>
    </div>
  )
}

export default About