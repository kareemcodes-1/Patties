import React, { useState } from 'react'
import Button from './Button'

const Subscribe = () => {

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('Submit');

  const handleSubmit = (e) => {
       e.preventDefault();
       setLoading(true);
       setTimeout(() => {
        setLoading(false);
       }, 2000);
       setText('Submitted.')
  }

  return (
    <div className='lg:mx-[2rem] mx-[1rem] my-[1rem] mt-[2rem]'>
        <h2 className='lg:block hidden lg:text-[5rem] text-[3rem]'>Subscribe to get 10% off.</h2>
          <h2 className='lg:hidden block lg:text-[5rem] text-[3rem] mb-[1rem]'>Subscribe to us.</h2>
        <form onSubmit={handleSubmit} className='flex lg:flex-row flex-col items-start justify-center gap-[2rem]'>
            <div>
            <div className='border border-[#ff5227] p-[1rem] rounded-[1rem] w-[100%]'>
            <input type="email" className='w-full h-full bg-transparent lg:text-[4rem] text-[2rem]' placeholder='Email address...'/>
            </div>
            <p className='py-[.5rem]'>By signing up to receive emails from Patties, you agree to our <a href="" className='underline'>privacy policy</a>. We treat your info responsibly.</p>
            </div>
            <button type='submit' className={`btn --border-orange lg:w-[30%] lg:h-[6rem] h-[4rem] w-full flex text-[1.5rem] items-center justify-center`}>{loading ? <div class="loader"></div> : text}</button>
        </form>
    </div>
  )
}

export default Subscribe