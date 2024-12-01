import React from 'react'
import SwiperElement from './Swiper'
import Button from './Button'

const FeaturedBurgers = () => {
  return (
    <div className='space-y space-x'>
         <div>
              <h1 className='text-[4rem]'>Featured Burgers</h1>

              <div>
                <SwiperElement />
              </div>

              <Button type='--border-orange' text="Where to buy"/>
         </div>
    </div>
  )
}

export default FeaturedBurgers;