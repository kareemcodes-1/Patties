import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../../data';
import Navbar from '@/components/Navbar';
import ProductPreview from '../components/ProductPreview';
import HowTo from '@/components/HowTo';
import MarqueeText from '@/components/MarqueeText';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';
import Testimonials from '../components/Testimonials';
import { CartProvider, useCart } from '@/actions';
import Lenis from 'lenis';
import FeaturedBurgers from '@/components/FeaturedBurgers';
import AboutBurgers from '@/components/AboutBurgers';
import Layout from '@/layout';

const ProductPage = () => {
  let {name} = useParams();
  const [product, setProduct] = useState(data.filter((p) => p.name.toLowerCase().split(' ').join('-').includes(name)));

  useEffect(() => {
    const lenis = new Lenis({
       autoRaf: true,
     });

     lenis.on('scroll', (e) => {
     });
 }, []);

  return (
    <>
       <Layout>
       <ProductPreview product={product}/>
       <HowTo />
       <AboutBurgers />
       <MarqueeText />
       <Testimonials />
       <FeaturedBurgers />
       <Subscribe />
       </Layout>
    </>
  )
}

export default ProductPage;