import '../styles/globals.css'

import { usePanelbear } from "@panelbear/panelbear-nextjs";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.PANELBEAR_ID);
  return <Component {...pageProps} />
}

export default MyApp
