import React from 'react'

import { NavLink, Outlet } from 'react-router-dom';
import Navbar from "../../../components/Navbar/index"
import Info from "../../../components/provider_info/Info"
import Service from '../../../components/provider_info/service';


const ProviderMain = () => {
  return (
    <>
    {/* <header><Navbar/></header> */}
    {/* <NavLink to="/info">Info</NavLink> */}
    <Info/>
    <Service/>
    <Outlet/>
    </>
  )
}

export default ProviderMain

