import React from 'react'
import Navbar from '../Components/Navbar';
import { Outlet } from "react-router-dom";
import Bottomnavbar from '../Components/BottomNavbar';

const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Bottomnavbar/> */}
    </>
  )
}

export default Rootlayout
