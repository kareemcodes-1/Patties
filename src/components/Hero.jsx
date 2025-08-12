import React, { useEffect, useRef } from "react";
import Button from "./Button";
// import SplitText from "../utils/split-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "../utils/Split3.min";
import SplitText from "gsap/SplitText";
import {motion} from "framer-motion";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

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
const Hero = () => {

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
    <>
      <div className="lg:pt-[3rem] pt-[5rem] relative mx-[1rem]">
        <div className="overflow-hidden">
        <h1 ref={ref} className="lg:text-[20rem] text-[6rem] text-center overflow-hidden w-full lg:leading-[21rem] leading-[10rem] !pilcrow mx-auto flex items-center justify-center">Patties</h1>
        </div>

        <motion.video
          variants={imgAnimation}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true }}
          className="w-[95%] lg:h-[50vh] h-[50vh] object-cover mx-auto rounded-[1rem]"
          src="/burger-preview.mp4"
          // playsInline
          // loop
          // autoPlay
          preload="auto"
          muted
        />
        {/* <div className='absolute text-center flex items-center gap-[1.5rem] lg:top-[0%] top-[7rem] lg:p-0 p-[1rem] justify-center flex-col lg:left-[15rem] lg:translate-y-[50%]'>
           <div>
             <h1 className='lg:text-[5rem] text-[3rem] text-white text-center lg:w-[800px] w-full'>Savor the warmth of our new burger lineup!</h1>
            <a href="/products"><Button type="--orange" text="Shop now"/></a>
           </div>
            </div> */}
      </div>
    </>
  );
};

export default Hero;
