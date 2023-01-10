import React from 'react'
import { NavLink } from 'react-router-dom'
import './Showcase.css'
import female_model from '../images/female_model.svg'
import male_model from '../images/male_model.svg'

const Showcase:React.FC = () => {
  return (
    <div className="showcase">
        <div className='img-1'>
            <img src={female_model} alt="female model" />
        </div>
        <div className="showcase-text">
            <h1>SALE UP TO 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <NavLink to={'/products'}><button className='theme-button'>SHOP NOW</button></NavLink>
        </div>
        <div className='img-2'>
            <img src={male_model} alt="male model" />
        </div>
    </div>

  )
}

export default Showcase