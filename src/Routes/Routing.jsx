import React from 'react'
import { Routes, Route } from 'react-router'
import { Card } from '../components/Card/Card'
import { Cart } from '../components/Cart/Cart'
import { Home } from '../Home/Home'
import { Header } from '../components/Header/Header'
import { CartProvider } from '../Context/CarContext'
import { ScrollTop } from '../Location/ScrollTop'


export const Routing = () => {
  return (
      <CartProvider>
                <Header />
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                      <Route path="/card" element={<Card />} />    
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path='/home' element={<Home />} /> */}
            </Routes>
        </CartProvider>
  )
}