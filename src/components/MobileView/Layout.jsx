import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './Navbar'
import Header from './Header'
import { useContext } from 'react'
import { MyContext } from "../../context/UseContext";


function Layout() {
    const { showFilter, setShowFilter } = useContext(MyContext);
  return (
    <div className='flex flex-col'>
        <CustomNavbar/>
        {showFilter && (
        <Header/>
        )}
    </div>
  )
}

export default Layout