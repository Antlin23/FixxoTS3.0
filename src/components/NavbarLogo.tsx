import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarLogo.css'

const NavbarLogo:React.FC = () => {
  return (
    <NavLink to="/" className="main-menu-logo" end>Fixxo.</NavLink>
  )
}

export default NavbarLogo