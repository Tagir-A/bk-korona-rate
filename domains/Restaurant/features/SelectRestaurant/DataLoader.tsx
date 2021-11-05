import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { nr } from '../../../../utils'
import { Layout } from './Layout'
import { Restaurant } from '../../Restaurant'

interface Props {

}



type State = {
  type: 'loading'
} | { type: 'loaded', data: Restaurant[] } | { type: 'error', e: Error }

export const DataLoader = (props: Props) => {
  const [state, setState] = useState<State>({ type: 'loading' })
  console.log(state)
  useEffect(() => {
    if (state.type === 'loading') {
      axios.get('https://burgerking.ru/middleware/restaurants/locations/search').then(response => setState({ type: 'loaded', data: response.data.items })).catch(e => setState({ type: 'error', e }))
    }

  }, [state.type, setState])

  switch (state.type) {
    case 'error':
      return <>Error</>
    case 'loading':
      return <>Загрузка</>
    case 'loaded':
      return <Layout restaurants={state.data} />
    default:
      return nr(state)
  }

}
