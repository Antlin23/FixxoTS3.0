import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarSites.css'

interface Props {
  showMenu: boolean
}


const NavbarSites:React.FC<Props> = (showMenu) => {
  return (
    /*showMenu.showmenu edited*/
    <div className={`main-menu-nav ${ showMenu ? "d-block": "" }`}> 
      <NavLink className="navlink" to="/" end>Home</NavLink>
      <NavLink className="navlink" to="/categories" end>Categories</NavLink>
      <NavLink className="navlink" to="/products" >Products</NavLink>
      <NavLink className="navlink" to="/contacts" end>Contacts</NavLink>
    </div>
  )
}

export default NavbarSites