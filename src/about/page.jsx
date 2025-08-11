import Layout from '@/layout';
import React from 'react'
import OurStory from './components/OurStory';
import AboutImages from './components/AboutImages';
import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";

import {motion} from "framer-motion";


const imgAnimation = {
  hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
      // polygon(0 0, 0 0, 0 100%, 0% 100%)
  },
  show: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    // polygon(0 0, 100% 0, 100% 100%, 0% 100%)
    transition: {
        delay: 0.3,
        duration: 0.9,
        ease: 'easeInOut'
    }
  }
}


const About = () => {

    const ref = useRef(null);
  
    useEffect(() => {
  
      if(ref.current){
        let heroHeading = new SplitText(ref.current, {type: "chars"})
  
        gsap.from(heroHeading.chars, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                // markers: true
            },
            delay: 1,
            yPercent: 100,
            stagger: 0.090,
            duration: 0.7
        })
      }
    }, [ref.current])

  return (
    <Layout>

        <div className='lg:pt-[5rem] pt-[7rem] lg:mx-[2rem] mx-[1rem]'>
           <div className='overflow-hidden'>
             <h1 className='lg:text-[10rem] text-[5rem] text-center' ref={ref}>About us</h1>
           </div>
            <motion.img variants={imgAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} src="https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About_Img" className=' w-full  lg:h-[70vh] h-[50vh] object-cover rounded-[1rem]'/>
        </div>
        <OurStory />
        <AboutImages />
    </Layout>
  )
}

export default About;