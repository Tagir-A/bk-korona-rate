import { Box } from '@material-ui/core'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const BasePageLayout: React.FC = ({ children }) => {
  return (
    <Box display='grid' gridTemplateRows='auto 1fr auto' minHeight='100%'>
      <Header />
      <main>{children}</main>
      <Box component='footer' gridRow='span 2'>
        <Footer />
      </Box>
    </Box>
  )
}
