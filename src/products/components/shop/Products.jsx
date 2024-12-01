import { data } from '../../../../data'
import React from 'react'

const Products = () => {
    
  return (
    <div className='lg:grid grid-cols-3 gap-[1rem]'>
        {
            data.map(({name, category, price, id, img}) => (
                <a href={`/products/${name.toLowerCase().split(' ').join('-')}`} className='relative' key={id}>
                    <div className='h-[27rem] rounded-[1rem] bg-[#80808012] flex items-center justify-center'>
                  <img src={img} alt={name} className=' w-[20rem] h-[20rem] rounded-[1rem]'/>
                  </div>
                    <div className='flex items-center flex-col py-[1rem] text-[1.2rem]'>
                  <span className='text-center'>{name}</span>
                  <span>from ${price}</span>
                  </div>
                </a>
            ))
        }
    </div>
  )
}

export default Products