import React, { useContext, useState } from 'react'
import './Navbar.css'
import NavbarLogo from '../components/NavbarLogo'
import NavbarSites from '../components/NavbarSites'
import NavbarIcons from '../components/NavbarIcons'
import { IShoppingCartContext, useShoppingCartContext } from '../contexts/ShoppingCartContext'

const Navbar:React.FC = () => {


  const [showMenu, setSHowMenu] = useState<boolean>(false)
  const { totalQuantity } = useShoppingCartContext() as IShoppingCartContext

  const toggleMenu = () => {
    setSHowMenu(!showMenu)
  }

  return (
    <header className="main-menu container">

      <NavbarLogo />

      <NavbarSites showMenu={showMenu}/>

      <div className="main-menu-icons"> 
        <NavbarIcons link="/search" icon="fa-regular fa-magnifying-glass"/>
        <NavbarIcons hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
        <NavbarIcons hideOnMobile={true} link="/wishlist" icon="fa-regular fa-heart" quantity={0} />

        <button className="btn btn-primary position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-theme">{totalQuantity}</span>
        <i className="fa-regular fa-bag-shopping"></i>
        </button>

        <button id='showMenuButton' onClick={toggleMenu} className='main-menu-icons btn-menu-icon d-lg-none'><i className="fa-regular fa-bars"></i></button>
    </div>

    </header>
  )
}

export default Navbar