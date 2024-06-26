import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import AllRoutes from '../Routes/AllRoutes'

const Layout = () => {
  return (
    
    <div>
     {/* HEADER INCLUDE */}
      <Header/>
      {/* SIDEBAR INCLUDE */}
      <Sidebar/>
      {/* MAIN CONTENT */}
      <AllRoutes/>

      {/* FOOTER INCLUDE */}
      <Footer/>
    </div>
  )
}

export default Layout
