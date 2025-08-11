import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({children}) => {
  return (
    <>
      <svg className="pointer-events-none absolute cursor-none"><filter id="grainy"><feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter></svg>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout