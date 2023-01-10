import React from 'react'
import './FlashSale.css'
import FlashSaleLeft from '../components/FlashSaleLeft'
import FlashSaleRight from '../components/FlashSaleRight'

const FlashSale:React.FC = () => {
  return (
    <>
        
        {/* Flash sale left */}
        <FlashSaleLeft  />
        {/* Flash sale right */}
        <FlashSaleRight />

    </>
  )
}

export default FlashSale