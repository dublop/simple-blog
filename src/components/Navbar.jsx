import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex justify-between align-center bg-white dark:bg-slate-950 text-blue-950 dark:text-white py-[10px] px-[40px] shadow-sm shadow-purple-500/50'>
      <img src={logo} alt="Logo" />
      <ul className='flex gap-[20px] font-medium'>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/posts'}><li>Posts</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar