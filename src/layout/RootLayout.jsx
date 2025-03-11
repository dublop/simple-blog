import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className='w-full h-full flex flex-col dark:bg-slate-950 dark:text-white'>
        <Navbar />
        <div className="w-full h-full p-[40px] flex flex-col justify-center items-center">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout