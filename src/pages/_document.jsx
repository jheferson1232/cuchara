/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel='preload' href='/fonts/pop400.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/pop500.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/pop600.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/pop700.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/pop800.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <meta name='facebook-domain-verification' content='muf97x8x9ki55a215qedf2nq5ogiwy' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
