import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import React from 'react'
import { nr } from '../../../../utils'

interface Props {
  state: State
  onMsg: (msg: Msg) => void
}

export type Msg = { type: 'close_clicked' } | { type: 'city_selected', city: { name: string } }

export type State = { type: 'open', cities: { name: string }[] } | { type: 'closed' }


export const Popup = ({ state, onMsg }: Props) => {

  const handleClose = () => {
    onMsg({ type: 'close_clicked' })
  }

  switch (state.type) {
    case 'closed':
      return (
        <Dialog open={false} />
      )
    case 'open':
      return (
        <Dialog open onClose={handleClose}>
          <DialogTitle>Выберите город</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Мы собрали цены по некоторым городам. Выбирайте свой, чтобы цены и курс были точнее
            </DialogContentText>
            <List>
              {state.cities.map(city => (
                <ListItem key={city.name} >
                  <ListItemButton onClick={() => onMsg({ type: 'city_selected', city })}>
                    <ListItemText primary={city.name} />
                  </ListItemButton>
                </ListItem>
              ))}

            </List>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
          </DialogActions>
        </Dialog>
      )
    default:
      return nr(state)
  }

}
