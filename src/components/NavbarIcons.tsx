import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarIcons.css'

interface Props {
  link: string,
  icon: string,
  quantity?: number,
  hideOnMobile?: boolean
}

const NavbarIcons:React.FC<Props> = ({link, icon, quantity, hideOnMobile}) => {
  return (
      <NavLink className={ `position-relative ${hideOnMobile ? "d-none d-md-flex" : ""} ` } to={link} end>
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-theme" data-testid="cartValue">{quantity}</span>
      <i className={icon}></i>
      </NavLink>
  )
}

export default NavbarIcons