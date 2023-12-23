import React from 'react'
import MainNav from './MainNav/MainNav'
import AppRoutes from '../Components/Routes/AppRoutes'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
      <header>
        <MainNav/>
      </header>
      <main>
        <AppRoutes/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout
