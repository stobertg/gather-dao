import React, { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { styled, globalStyles, lightTheme, darkTheme } from '@theme'
import { LeftNav, Stage } from '@components'

const SiteWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100vw'
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { globalStyles() }, [])

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={ false }
    >
      <SiteWrap>
        <LeftNav />
        <Stage><Component {...pageProps} /></Stage>
        {/* <Footer /> */}
      </SiteWrap>
    </ThemeProvider>
  )

}


export default MyApp
