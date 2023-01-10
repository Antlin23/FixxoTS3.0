import React from 'react'
import './FlashSaleBox.css'
import { NavLink } from 'react-router-dom'

const FlashSaleBox:React.FC = () => {
  return (
    <div className="flashsales-box">
      <div>
        <h1>2 FOR USD $29</h1>
        <NavLink to={'/products'}><button className='theme-button'>FLASH SALE</button></NavLink>
      </div>
    </div>
  )
}

export default FlashSaleBox