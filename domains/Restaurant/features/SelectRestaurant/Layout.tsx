import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { cityFrom } from 'lvovich';
import { Popup, State as PopupState } from './Popup'
import { nr } from '../../../../utils'

interface Props {
  selectedRestaurant: string
  cities: { name: string }[]
  onMsg: (msg: Msg) => void
}

export type Msg = {
  type: 'city_selected'
  city: { name: string }
}


export const Layout = ({ cities, selectedRestaurant, onMsg }: Props) => {
  const [popupState, setPopupState] = useState<PopupState>({ type: 'closed' })

  return (
    <>
      <Button variant="text" onClick={() => setPopupState({ type: 'open', cities })}>{cityFrom(selectedRestaurant)}</Button>
      <Popup state={popupState} onMsg={msg => {
        switch (msg.type) {
          case 'close_clicked':
            setPopupState({ type: 'closed' })
            break;
          case 'city_selected':
            setPopupState({ type: 'closed' })
            onMsg(msg)
            break

          default:
            nr(msg)
        }
      }} />
    </>
  )
}
