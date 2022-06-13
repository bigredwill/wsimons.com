
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
