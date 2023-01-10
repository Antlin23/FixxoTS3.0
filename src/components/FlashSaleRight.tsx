import React, { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/ProductContexts'
import FlashSaleBox from './FlashSaleBox'
import FlashSaleCards from './FlashSaleCards'

const FlashSaleRight:React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(4)
  }, [])

  return (
        <section className="flashsales flex-row-reverse">
            <FlashSaleBox />
            <FlashSaleCards items={featured} />
        </section>
  )
}

export default FlashSaleRight