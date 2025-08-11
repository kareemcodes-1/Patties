import React from 'react'

const AboutBurgers = () => {
  return (
   <div className='lg:mt-[5rem] mt-[2rem] lg:grid flex flex-col grid-cols-2 lg:gap-[1rem] gap-[2rem] lg:mx-[2rem] mx-[1rem]'>
         <div>
            <img src="https://assets.website-files.com/63aaba6ec753bd2d81607067/63c55264e766503b5ef3d635_Burger%20Bite%203-p-500.png" alt="" className='lg:h-auto h-[25rem] object-cover w-full rounded-[1rem]'/>
        </div>

        <div className='border border-[#ff5227] p-[1rem] rounded-[1rem] flex items-center justify-center flex-col lg:gap-[3rem] gap-[1rem]'>
            <div className='azert font-medium text-center text-[1.2rem]'>ABOUT OUR BURGERS</div>
            <h2 className='lg:text-[2.5rem] text-[2.2rem] text-center flex items-center justify-center justify-self-center'>At Patties,  we believe in the power of simple, fresh ingredients and a passion for baking. We’re a family-owned bakery crafting small-batch burgers.</h2>
        </div>


    </div>
  )
}

export default AboutBurgers