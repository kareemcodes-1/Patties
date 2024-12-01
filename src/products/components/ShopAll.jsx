import React from 'react'
import Products from './shop/Products'

const ShopAll = () => {
  return (
    <div className='space-x pt-[8rem]'>
        <h2 className='lg:text-[6rem] text-[3rem] mb-[1.5rem]'>Shop all products</h2>
        <Products />
    </div>
  )
}

export default ShopAll