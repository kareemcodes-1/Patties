import Layout from '@/layout';
import React from 'react'

const Contact = () => {
  return (
    <Layout>
         <div className='grid grid-cols-2 gap-[2rem] pt-[5rem] mx-[2rem]'>
              <img src="https://images.pexels.com/photos/3738762/pexels-photo-3738762.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Stop_by" className='rounded-[1rem]' />

              <div className='bg-[#f9dff2] rounded-[1rem] flex items-center flex-col justify-center'> 
                   <h2 className='text-[5rem] text-center'>Stop by!</h2>
                   <div className='text-center'>
                       <p>123 Maple Street, Springfield, IL 62704</p>
                       <p>(555) 123-4567</p>
                       <p>patties@gmail.com</p>
                   </div>

                   <button type="button" className='btn --orange mt-[2rem]'>Get Directions</button>
              </div>
         </div>

         <div className='mt-[2rem] mx-[2rem] grid grid-cols-2 gap-[2rem]'>
               <div>
                   <h2 className='text-[4rem]'>Drop us a line</h2>
                   <form className='flex flex-col gap-[2rem]'>
                        <div className='border-b border-[#ff5227] w-full'>
                             <input type="text" name="" id="" className='bg-transparent w-full text-[1.5rem]' placeholder='Your name' />
                        </div>

                        <div className='border-b border-[#ff5227] w-full'>
                             <input type="text" name="" id="" className='bg-transparent w-full text-[1.5rem]' placeholder='Email address' />
                        </div>

                        <div className='border-b border-[#ff5227] w-full'>
                             <input type="text" name="" id="" className='bg-transparent w-full text-[1.5rem]' placeholder='Contact number' />
                        </div>

                        <div className='border-b border-[#ff5227] w-full'>
                             <input type="text" name="" id="" className='bg-transparent w-full text-[1.5rem]' placeholder="What's cookin" />
                        </div>

                        <button type="submit" className='btn --orange w-[20rem]'>Submit</button>
                   </form>

               </div>

               <div>
                    <img src="https://images.pexels.com/photos/8338138/pexels-photo-8338138.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='h-[25rem] rounded-[1rem] w-full object-cover'/>
               </div>
         </div>
    </Layout>
  )
}

export default Contact;