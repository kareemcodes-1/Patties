import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import MarqueeText from "./components/MarqueeText";
import Products from "./components/Products";
import HowTo from "./components/HowTo";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Lenis from 'lenis'
import { useEffect } from "react";
import ScrollVelocity from './lib/scroll-velocity';
import FeaturedBurgers from "./components/FeaturedBurgers";
import Layout from "./layout";

function App(){

   useEffect(() => {
      const lenis = new Lenis({
         autoRaf: true,
       });

       lenis.on('scroll', (e) => {
       });
   }, []);

   return (
      
      <Layout>
         <Hero />
         <FeaturedBurgers />
         <CTA />
         {/* <MarqueeText /> */}
         <ScrollVelocity
  texts={['100% Quality', 'Healthy Ingredients']} 
  velocity={100} 
  className="custom-scroll-text pilcrow "
/>
         <Products />
         <HowTo />
         <Subscribe />
      </Layout>
   )
}


export default App;
