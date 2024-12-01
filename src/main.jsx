import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './products/[name]/ProductPage.jsx';
import ProductsPage from './products/page.jsx';
import { CartProvider } from './actions/index.jsx';
import About from './about/page.jsx';
import Contact from './contact/page.jsx';
// import './index.css'

createRoot(document.getElementById('root')).render(
  <CartProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="products/:name" element={< ProductPage/>} />
      <Route path="products" element={< ProductsPage/>} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
);