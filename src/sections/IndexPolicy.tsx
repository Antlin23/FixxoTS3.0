import React from 'react'
import './IndexPolicy.css'

const IndexPolicy:React.FC = () => {
  return (
    <section className="index-policy">
        <div className='index-policy-section'>
            <div className="index-policy-part">
                <i className="fa-light fa-messages-question"></i>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="index-policy-part">
                <i className="fa-regular fa-credit-card"></i>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
        <div className='index-policy-section'>
            <div className="index-policy-part">
                <i className="fa-light fa-truck"></i>
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="index-policy-part">
                <i className="fa-light fa-truck"></i>
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default IndexPolicy