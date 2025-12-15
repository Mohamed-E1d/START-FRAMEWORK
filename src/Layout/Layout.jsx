import React from 'react'
import Navbar from '../Navbar/CustomNavbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
<>
<Navbar/>

<Outlet/>


<Footer/>

</>
  )
}
