import React from 'react'
import Products from './shop/Products'

const ShopAll = () => {
  return (
    <div className='lg:space-x mx-[1rem] lg:pt-[8rem] pt-[6.5rem]'>
        <h2 className='lg:text-[6rem] text-[3rem] mb-[1.5rem]'>Shop all products</h2>
        <Products />
    </div>
  )
}

export default ShopAll