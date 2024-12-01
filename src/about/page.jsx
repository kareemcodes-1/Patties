import Layout from '@/layout';
import React from 'react'
import OurStory from './components/OurStory';

const About = () => {
  return (
    <Layout>
        <div className='pt-[5rem]'>
            <img src="https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About_Img" className='w-[95%] mx-[2rem] h-[70vh] object-cover rounded-[1rem]'/>
        </div>
        <OurStory />
    </Layout>
  )
}

export default About;