import { Footer } from '../Footer'
import { NavBar } from '../NavBar'

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
