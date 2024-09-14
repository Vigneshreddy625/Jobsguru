import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import CustomNavbar from './Navbar';
import Header from './Header';
import { MyContext } from "../../context/UseContext";
import Jobs from "./Jobs";

function Layout() {
  const { showFilter } = useContext(MyContext);
  
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="fixed w-full z-10"> 
        <CustomNavbar />
        {showFilter && <Header />}
      </div>
      <div className="mt-32 p-6">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
