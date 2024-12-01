import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react'
import ShopAll from './components/ShopAll';
import { CartProvider } from '@/actions';
import Footer from '@/components/Footer';
import Lenis from 'lenis';
import Layout from '@/layout';

const ProductsPage = () => {

  useEffect(() => {
    const lenis = new Lenis({
       autoRaf: true,
     });

     lenis.on('scroll', (e) => {
     });
 }, []);

  return (
      <Layout>
       <ShopAll />
       </Layout>
  )
}

export default ProductsPage;