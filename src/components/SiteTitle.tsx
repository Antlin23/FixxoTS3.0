import React from 'react'
import { NavLink } from 'react-router-dom'
import './SiteTitle.css'

interface Props{
  activePage: string | undefined
}

const SiteTitle:React.FC<Props> = ({activePage}) => {
  return (
    <>
      {/* site-title /breadcrumb */}
      <div className="site-title">
        <i className="fa-sharp fa-solid fa-house me-2"></i>
        <NavLink to={'/'}>Home</NavLink> <i className="fa-solid fa-angle-right"></i> {activePage}
      </div>
    </>
  )
}

export default SiteTitle