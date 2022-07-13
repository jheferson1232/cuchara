import { Footer } from '@layouts/Footer/Footer'
import { Navbar } from '@layouts/Navbar/Navbar'

export const DefaultLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
