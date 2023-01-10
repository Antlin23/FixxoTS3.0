import React from 'react'
import pamela_reif from '../images/pamela_reif.svg'
import lets_be from '../images/lets_be.svg'
import './Banners.css'

const Banners:React.FC = () => {
  return (
    <section className="banners mb-5 ">
        <img src={pamela_reif} alt="pamela reifs" className="mt-5" />
        <img src={lets_be} alt="lets be conscious" className='mt-5'/>
    </section>
  )
}

export default Banners