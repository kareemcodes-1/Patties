import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { data } from '../../data';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "../utils/Split3.min";
import SplitText from "gsap-trial/SplitText";
import {motion} from "framer-motion";
import FadeContent from '@/utils/fade-content';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Products = () => {

    const [products, setProducts] = useState(data.filter((product) => product.id <= 3));
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
    <div className='lg:space-x mx-[1rem] space-y mt-[3rem]'>
              <div className='overflow-hidden'>
              <h1 className='lg:text-[4rem] text-[3rem]' ref={ref}>Shop our burgers</h1>
              </div>

              <div className='lg:grid grid-cols-3 gap-[2rem]'>
              {products.map(({name, id, img, price}) => (
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
             <a href={`/products/${name.toLowerCase().split(' ').join('-')}`} className='!w-[25rem] !lg:h-[35rem] h-[25rem]' key={id}>`
                   <div className='lg:h-[27rem] h-[23rem] rounded-[1rem] bg-[#80808012] flex items-center justify-center'>
                  <img src={img} alt={name} className=' w-[20rem] h-[15rem] rounded-[1rem] object-cover'/>
                  </div>
                  <div className='flex items-center flex-col py-[1rem] text-[1.2rem]'>
                  <p className='text-center'>{name}</p>
                  <p>from ${price}</p>
                  </div>
                </a>
                </FadeContent>
                ))}
              </div>
    </div>
  )
}

export default Products;