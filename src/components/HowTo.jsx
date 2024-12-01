import React from 'react'

const HowTo = () => {
  return (
    <div className='lg:mt-[10rem] mt-[5rem] lg:grid flex flex-col lg:grid-cols-2 gap-[1rem] lg:mx-[2rem]'>
        <div className='border border-[#ff5227] p-[1rem] rounded-[1rem] flex items-center justify-center flex-col gap-[3rem]'>
            <div className='azert font-medium text-center text-[1.2rem]'>HOW TO</div>
            <h2 className='text-[2.5rem] text-center flex items-center justify-center justify-self-center'>Every batch is crafted with the finest ingredients, mixed to perfection, and baked with love to create a treat that's not just delicious, but memorable.</h2>
        </div>

        <div>
            <img src="https://assets.website-files.com/63aaba6ec753bd2d81607067/63c54da994eb398766115bb2_Burger%20Photos%2011.png" alt="" className='lg:h-auto h-[25rem] w-full object-cover rounded-[1rem]'/>
        </div>
    </div>
  )
}

export default HowTo