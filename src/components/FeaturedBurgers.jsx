import React, { useEffect, useRef } from 'react'
import SwiperElement from './Swiper'
import Button from './Button'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "../utils/Split3.min";
import SplitText from "gsap/SplitText";
import {motion} from "framer-motion";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const FeaturedBurgers = () => {

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
          // delay: 1,
          yPercent: 100,
          stagger: 0.040,
          duration: 0.7
      })
    }
  }, [ref.current])

  return (
    <div className='lg:space-x mx-[1rem] space-y'>
              <div className='overflow-hidden'>
              <h1 className='lg:text-[4rem] text-[3rem] lg:mb-0 mb-[1.5rem]' ref={ref}>Featured Burgers</h1>
              </div>

              <div>
                <SwiperElement />
              </div>

              <Button type='--border-orange' className={`lg:w-[30%] w-full mt-[1rem] flex items-center justify-center mx-auto py-[1rem] px-[2rem] lg:text-[1.5rem] text-[1.2rem]`} text="Where to buy"/>
    </div>
  )
}

export default FeaturedBurgers;