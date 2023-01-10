import React from 'react'
import './MapSection.css'

const MapSection:React.FC = () => {
  return (
    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38711.491567568744!2d18.006630363017354!3d59.34093131405679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d86c5590a35%3A0xac5dd727a529fe56!2sEC%20Utbildning!5e0!3m2!1ssv!2sse!4v1666676609419!5m2!1ssv!2sse" 
      allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default MapSection