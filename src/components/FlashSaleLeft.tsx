import React, { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/ProductContexts'
import FlashSaleBox from './FlashSaleBox'
import FlashSaleCards from './FlashSaleCards'

const FlashSaleLeft:React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(4)
  }, [])

  return (
        <section className="flashsales">
            <FlashSaleBox />
            <FlashSaleCards items={featured} />
        </section>
  )
}

export default FlashSaleLeft