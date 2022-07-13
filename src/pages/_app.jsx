import { AppProvider } from 'src/contexts/AppContext'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Analytics } from 'src/components/Analytics/Analytics'
import { LayoutProvider } from 'src/contexts/LayoutContext'

import '@styles/reset.css'
import '@styles/fontface.css'
import '@styles/globals.css'
import '@styles/theme.scss'

const App = (props) => {
  return (
    <AppProvider>
      <LayoutProvider>
        <MyApp {...props} />
      </LayoutProvider>
    </AppProvider>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Analytics />
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default App
