import React from 'react'

const OurStory = () => {
  return (
   <div className='lg:mt-[5rem] mt-[2rem] lg:grid flex flex-col grid-cols-2 gap-[1rem] lg:mx-[2rem]'>

       
       <div className='border border-[#ff5227] p-[1rem] rounded-[1rem] flex items-center justify-center flex-col gap-[3rem]'>
            <div className='azert font-medium text-center text-[1.2rem]'>OUR STORY</div>
            <h2 className='text-[2.5rem] text-center flex items-center justify-center justify-self-center'>At Patties, we craft every burger with passion, fresh ingredients, and bold flavors. From sizzling grills to happy tables, we’re all about creating unforgettable moments, one bite at a time. 🍔</h2>
        </div>

         <div>
            <img src="https://images.pexels.com/photos/6163024/pexels-photo-6163024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='lg:h-[35rem] h-[25rem] object-cover w-full rounded-[1rem]'/>
        </div>




    </div>
  )
}

export default OurStory