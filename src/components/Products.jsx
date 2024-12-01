import React, { useState } from 'react'
import Button from './Button'
import { data } from '../../data';

const Products = () => {

    const [products, setProducts] = useState(data.filter((product) => product.id <= 3));
    

  return (
    <div className='space-y space-x'>
         <div>
              <h1 className='text-[4rem]'>Shop our burgers</h1>

              <div className='lg:grid grid-cols-3 gap-[2rem]'>
              {products.map(({name, id, img, price}) => (
             <a href={`/products/${name.toLowerCase().split(' ').join('-')}`} className='!w-[25rem] !h-[35rem]' key={id}>`
                   <div className='h-[27rem] rounded-[1rem] bg-[#80808012] flex items-center justify-center'>
                  <img src={img} alt={name} className=' w-[20rem] h-[20rem] rounded-[1rem]'/>
                  </div>
                  <div className='flex items-center flex-col py-[1rem] text-[1.2rem]'>
                  <span className='text-center'>{name}</span>
                  <span>from ${price}</span>
                  </div>
                </a>
                ))}
              </div>
         </div>
    </div>
  )
}

export default Products;