import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ViewTable } from '../domains/BKItem/features/ViewTable/ViewTable';
import { SelectRestaurant } from '../domains/Restaurant/features/SelectRestaurant'
import React, { useState } from 'react'
import { BKItem } from '../domains/BKItem'
import { nr } from '../utils'
import { createClient, PostgrestError } from '@supabase/supabase-js'
import { ViewList } from '../domains/BKItem/features/ViewList/ViewList';
import { Box, Container, Typography } from '@mui/material';

export const getStaticProps: GetStaticProps = async (context) => {
  const supabase = createClient(process.env.DB_URL, process.env.DB_KEY);

  try {
    let { data: cities, error }: { data: { name: string }[] | null, error: PostgrestError | null } = await supabase
      .from('cities')
      .select('*')
    if (!cities) throw new Error('no cities loaded')
    if (error) throw new Error(error.message)
    const data = await Promise.all(cities.map(async city => {
      return await supabase
        .from(city.name)
        .select('*').then(response => ({
          name: city.name,
          data: response.data
        }))
    }))

    return {
      props: {
        data,
        cities,
      }

    }
  } catch (e) {
    return {
      // notFound: true,
      props: {
        e: `${e}`
      }
    }
  }
}

type State = { type: 'city_selected', data: { name: string, data: BKItem[] } } | { type: 'error', text: string } | { type: 'loading_error', text: string }


const Home: NextPage<{
  data: { name: string, data: BKItem[] }[],
  cities: { name: string }[],
  e?: Error
}> = ({ data, cities, e }) => {

  const [state, setState] = useState<State>(data && data[0] && !e ? { type: 'city_selected', data: data[0] } : { type: 'loading_error', text: 'Проблема с загрузкой данных' })


  return (
    < >
      <Head>
        <title>Курс БК корон</title>
        <meta name="description" content="Найдите самые выгодные предложения из БК" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Box sx={{ mt: 2 }} />
        <Typography variant='body1' component='h4' >
          В БК есть программа лояльности и валюта — &quot;Короны&quot;.
        </Typography>
        <Typography variant='body1' component='h4' >
          Однако разные предложения имеют разную цену в рублях.
          Благодаря таблице, наглядно видно какие предложения самые выгодные.
        </Typography>

        {(() => {
          switch (state.type) {
            case 'city_selected':
              return <>
                <p >
                  Цены и короны указаны для <SelectRestaurant selectedRestaurant={state.data.name} cities={cities} onMsg={(msg) => {
                    switch (msg.type) {
                      case 'city_selected':
                        const selectedCityData = data.find(item => item.name === msg.city.name)
                        if (selectedCityData) {
                          setState({ type: 'city_selected', data: selectedCityData })
                        }
                        if (!selectedCityData) {
                          setState({ type: 'error', text: 'Выбран неверный город' })
                        }
                        break;

                      default:
                        break;
                    }
                  }} />
                </p>

                <ViewTable data={state.data.data} />
                {/* <ViewList data={state.data.data} /> */}
              </>
            case 'error':
              return <>
                <p >
                  <SelectRestaurant selectedRestaurant={state.text} cities={cities} onMsg={(msg) => {
                    switch (msg.type) {
                      case 'city_selected':
                        const selectedCityData = data.find(item => item.name === msg.city.name)
                        if (selectedCityData) {
                          setState({ type: 'city_selected', data: selectedCityData })
                        }
                        if (!selectedCityData) {
                          setState({ type: 'error', text: 'Выбран неверный город' })
                        }
                        break;

                      default:
                        break;
                    }
                  }} />
                </p></>
            case 'loading_error':
              return <p >
                Произошла ошибка при загрузке данных
              </p>
            default:
              return nr(state)
          }
        })()}


      </Container>
    </>
  )
}

export default Home
