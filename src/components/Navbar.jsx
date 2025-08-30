import { Menu, ShoppingBag, Trash, X } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SwiperNav from "./SwiperNav";
import { useCart } from "@/actions";
import AnimatedContent from "@/utils/animated-content";
import Button from "./Button";
import gsap from "gsap";



const navLinks = [
  {
    id: 1,
    href: "/products",
    title: "Shop all",
  },
  {
    id: 2,
    href: "/about",
    title: "About us",
  },

  {
    id: 3,
    href: "/contact",
    title: "Contact",
  }
];

const Navbar = () => {
  const [addBorder, setAddBorder] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navRef = useRef(null);

  const { cartItems, openModal, deleteItem, incrementQuantity, decrementQuantity, clearCart } = useCart();

  const handleScroll = useCallback(() => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      setAddBorder(true);
    } else {
      setAddBorder(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  if (toggleMenu && navRef.current) {
    gsap.fromTo(
      navRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }
}, [toggleMenu]);


  const handleCheckout = () => {
    alert('Checkout is disabled for this website.')
  }

  return (
    <header
      className={`${
        addBorder
          ? "!border-red-500 bg-[#fff6e6] border-b-[2px] transition-opacity"
          : ""
      } fixed w-full z-[100]  py-[1rem] space-x gap-[1rem]`}
    >
       <nav className="flex items-center justify-between w-full">
         <div className="lg:hidden block">
          <AnimatedContent
            distance={20}
            delay={1500}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            // scale={1.1}
            threshold={0.2}
          >
          <div className="cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}>
              <Menu className="text-[2rem] w-[1.5rem] h-[1.5rem]"/>
          </div>
          </AnimatedContent>
         </div>

          <AnimatedContent
            distance={20}
            delay={1500}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            // scale={1.1}
            threshold={0.2}
          >
        <a href="/" className="lg:ext-start text-center">
          <h2 className="patty text-[2rem]">Patties</h2>
        </a>
        </AnimatedContent>

          <nav className="lg:block hidden">


          <ul className="flex items-center gap-[2.5rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
            <AnimatedContent
             delay={1500}
            distance={20}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            // scale={1.1}
            threshold={0.2}
          >
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text-[1.1rem] transition-opacity duration-300 ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-30"
                      : "opacity-100"
                  }`}
                >
                  {link.title}
                </a>
                </AnimatedContent>
              </li>
            ))}
          </ul>
        </nav>

     {toggleMenu && <nav ref={navRef} className="lg:hidden fixed bottom-0 left-0 right-0 h-[100vh] z-[100] p-[1rem] bg-[#fff6e6]">
            <X className="text-[2rem] w-[2rem] h-[2rem] lg:hidden absolute right-[1rem] top-[1rem]" onClick={() => setToggleMenu(false)}/>
          <ul className="flex flex-col items-start gap-[2.5rem] mt-[10rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text-[2.5rem] transition-opacity duration-300 ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-30"
                      : "opacity-100"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav> }

                
        <AnimatedContent
             delay={1500}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
      <div className="relative cursor-pointer">
        <div className="bg-[#ff5227] !text-white w-[1.3rem] h-[1.3rem] flex items-center justify-center rounded-full absolute top-[-.5rem] right-[-1rem]">
          <span className="text-[0.90rem]">{cartItems.length}</span>
        </div>

            
        <div onClick={() => setCartModal(true)}>
          <ShoppingBag className="w-[1.5rem] h-[1.5rem]" />

        </div>
      </div>
      </AnimatedContent>
       </nav>

      {cartModal || openModal ? (
        <div
          className={`fixed top-0 bottom-0 h-screen bg-[#fff6e6] border-l p-[1rem] border-[#ff5227] lg:w-[35%] w-full right-0 transform transition-transform duration-300 ${
            cartModal || openModal ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div onClick={() => setCartModal(false)}>
            <X className="cursor-pointer w-[1.5rem] h-[1.5rem] absolute right-[2rem]" />
          </div>

          <div className="border-b border-[#ff5227] w-full">
            <h2 className="text-[4rem] pb-[1rem]">
              My Bag ({cartItems.length})
            </h2>
          </div>

          {cartItems.length > 0 ? (
            <>
              <div className="flex flex-col max-h-[60vh] overflow-y-scroll gap-[1rem] pt-[1rem]">
                {cartItems.map((item, index) => (
                  <article
                    key={index}
                    className="flex items-start justify-between gap-[1rem]"
                  >
                      <div className="flex items-center gap-[1rem]">
                        <img src={item.img} alt={item.name} className='aspect-square w-[7rem] border border-red-400 object-cover rounded-[1rem]'/>

                        <div className='flex flex-col gap-[1rem]'>
                           <div>
                           <span className='text-red'>{item.name}</span> <br />
                           <span>{item.size}</span>
                           </div>

                           <div className="border border-[#ff5227] overflow-hidden w-[7rem] h-[2.5rem] rounded-[1rem] flex items-center gap-[0rem] justify-between">
                           <button className="text-[2rem] font-medium hover:bg-[#f9dff2] w-[30%] transition-[.4s] inst-sans" onClick={() => decrementQuantity(item)}>-</button>
                                <div className="text-[1.2rem] !inst-sans">
                                     <span>{item.quantity}</span>
                                </div>
                                <button className="text-[1.5rem] font-medium hover:bg-[#f9dff2] w-[30%] transition-[.4s] inst-sans" onClick={() => incrementQuantity(item)}>+</button>
                           </div>
                        </div>
                      </div>

                        <div className="flex items-center flex-col gap-[1rem] relative">
                            <span>${item.price}</span>

                            <div className="cursor-pointer" onClick={() => deleteItem(item)}>
                                <Trash className="text-[2rem]"/>
                            </div>
                        </div>
                  </article>
                ))}

                <div className="mt-[2rem]">
                  <h1 className="text-[2rem]">You might like</h1>

                  <SwiperNav />
                </div>

                <div className="absolute bottom-[2rem] w-[90%]">
                  <div className="flex items-center gap-[1rem]">
                    <Button text={'Clear'} type={'--orange'} className={'p-[.8rem] w-full text-[1.3rem]'} onClick={clearCart}/>
                    <Button text={'Checkout'} type={'--border-orange'} onClick={handleCheckout} className={'p-[.8rem] w-full text-[1.3rem]'}/>
                </div>
                </div>
              </div>
            </>
          ) : (
            <p className="py-[1rem]">Your bag is currently empty.</p>
          )}
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
