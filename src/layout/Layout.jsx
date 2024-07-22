import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
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
