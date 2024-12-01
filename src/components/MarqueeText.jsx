import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeText = () => {
  return (
    <Marquee speed={100} className='flex items-center gap-[5rem] py-[3rem]'>
        <div className='patty uppercase text-[5rem] ml-[3rem]'>100% Quality</div>
        <div className='patty !upppercase text-[5rem] ml-[3rem]'>Healthy Ingredients</div>
        <div className='patty !uppercase text-[5rem] ml-[3rem]'>PATTIES</div>
    </Marquee>
  )
}

export default MarqueeText