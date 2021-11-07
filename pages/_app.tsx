import '../styles/globals.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { usePanelbear } from "@panelbear/panelbear-nextjs";
import type { AppProps } from 'next/app'
import React from 'react';
import { BasePageLayout } from '../ui/BasePageLayout';

function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_ID);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
        },
      }),
    [prefersDarkMode],
  );


  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <BasePageLayout>
      <Component {...pageProps} />
    </BasePageLayout>
  </ThemeProvider>
}

export default MyApp
