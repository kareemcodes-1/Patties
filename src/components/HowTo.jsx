import BlurText from '@/utils/blur-text'
import React from 'react'
import {motion} from "framer-motion";

const HowTo = () => {


  const imgAnimation = {
    hidden: {
      clipPath: "inset(5% 0 95% 0)",
    },
    show: {
      clipPath: "inset(0% 0 0 0)",
      transition: {
        delay: 0.4,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };


  return (
    <div className='lg:mt-[10rem] mt-[5rem] lg:grid flex flex-col lg:grid-cols-2 lg:gap-[1rem] gap-[3rem] lg:mx-[2rem] mx-[1rem]'>
        <div className='border border-[#ff5227] lg:p-[1rem] p-[.5rem] rounded-[1rem] flex items-center justify-center flex-col lg:gap-[3rem] gap-[2rem]'>
            <div className='azert font-medium text-center text-[1.2rem]'>ABOUT US</div>
            {/* <h2 className='text-[2.5rem] text-center flex items-center justify-center justify-self-center'>Every batch is crafted with the finest ingredients, mixed to perfection, and baked with love to create a treat that's not just delicious, but memorable.</h2> */}
            <BlurText
             text="Every batch is crafted with the finest ingredients, mixed to perfection, and baked with love to create a treat that's not just delicious, but memorable."
             delay={25}
             animateBy="words"
             direction="top"
             className="lg:text-[2.5rem] text-[2.2rem] text-center items-center justify-center lg:justify-self-center"
             />
        </div>

        <div>
            <motion.img     
             variants={imgAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} src="https://assets.website-files.com/63aaba6ec753bd2d81607067/63c54da994eb398766115bb2_Burger%20Photos%2011.png" alt="" className='lg:h-auto h-[30rem] w-full object-cover rounded-[1rem]'/>
        </div>
    </div>
  )
}

export default HowTo