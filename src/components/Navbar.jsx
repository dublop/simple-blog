import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, handdleTheme } = useContext(ThemeContext)
  
  return (
    <nav className='flex justify-between align-center bg-white dark:bg-slate-950 text-blue-950 dark:text-white py-[10px] px-[40px] shadow-sm shadow-purple-500/50'>
      <img src={logo} alt="Logo" />
      <ul className='flex gap-[20px] font-medium'>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/posts'}><li>Posts</li></NavLink>
      </ul>
      <label className='switch' >
        <input type="checkbox" checked={theme === 'dark'} onChange={handdleTheme}/>
        <span className="slider round"></span>
      </label>
    </nav>
  )
}

export default Navbar