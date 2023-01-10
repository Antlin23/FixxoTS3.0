import React from 'react'
import { NavLink } from 'react-router-dom'
import './NewArrivals.css'

const NewArrivals:React.FC = () => {
  return (
    <div className='d-flex justify-content-center'>
    <section className='new-arrivals'>
        <div className='section-1'>
          <div className='section-1-content'>
              <h1>Winter Clearance Up to 70% Off!</h1>
              <p className='mt-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem apriam eaque ipsa quae ab illo inventore.</p>
              <NavLink to={'/products'}><button className='theme-button'>SHOP NOW</button></NavLink>
            </div>
        </div>
        <div className='section-2'>
          <div className='section-2-content'>
              <h1>New Arrivals</h1>
              <NavLink to={'/products'}><button className='theme-button'>SHOP NOW</button></NavLink>
          </div>
        </div>
    </section>
    </div>
  )
}

export default NewArrivals