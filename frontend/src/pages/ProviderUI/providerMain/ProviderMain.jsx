import React from 'react'

import { NavLink, Outlet } from 'react-router-dom';
import Navbar from "../../../components/Navbar/index"



const ProviderMain = () => {
  return (
    <>
    {/* <header><Navbar/></header> */}
    <NavLink to="/info">Info</NavLink>
    <Outlet/>
    </>
  )
}

export default ProviderMain

