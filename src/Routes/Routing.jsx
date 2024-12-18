import React from 'react'
import { Routes, Route } from 'react-router'
import { Card } from '../components/Card/Card'
import { Cart } from '../components/Cart/Cart'
import { Home } from '../Home/Home'
import { Header } from '../components/Header/Header'
import { CartProvider } from '../Context/CarContext'


export const Routing = () => {
  return (
      <CartProvider>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Card />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/home' element={<Home />} />
            </Routes>
        </CartProvider>
  )
}