import React from 'react'
import { NavLink } from 'react-router-dom'
import './SpecialityCards.css'

const SpecialityCards:React.FC = () => {
  return (
    <div className='speciality-container'>
    <section className='speciality container'>
        <h1>Our Speciality</h1>
        <section className='cards'>

            <div className='card-section d-flex justify-content-center'>
                <div className='card'>
                    <h2>Track Your Order</h2>
                    <NavLink to="/trackorder">Get Started &#62;</NavLink>
                </div>
                <div className='card-img'></div>
            </div>

            <div className='card-section d-flex justify-content-center'>
                <div className='card'>
                    <h2>Make a Return</h2>
                    <NavLink to="/return">Get Started &#62;</NavLink>
                </div>
                <div className='card-img'></div>
            </div>

            <div className='card-section d-flex justify-content-center'>
                <div className='card'>
                    <h2>Request a Price Adjustment</h2>
                    <NavLink to="/requestprice">Get Started &#62;</NavLink>
                </div>
                <div className='card-img'></div>
            </div>

        </section>
    </section>
    </div>
  )
}

export default SpecialityCards