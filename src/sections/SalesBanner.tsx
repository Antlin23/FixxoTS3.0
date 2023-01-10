import React from 'react'
import './SalesBanner.css'
import { NavLink } from 'react-router-dom'

const SalesBanner:React.FC = () => {
  return (
    <section className='sales-banner container'>
        <h1>Up to 70% off*</h1>
        <p>Women's, Men's & Kids' Winter Fashion</p>
        <NavLink to={'/products'}><button className='theme-button'>FLASH SALE</button></NavLink>
    </section>
  )
}

export default SalesBanner