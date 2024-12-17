import { useState } from 'react'
import { CartProvider } from './Context/CarContext'
import { Card } from './components/Card'
import { Cart } from './components/Cart'
// import { BrowserRouter, useRoutes } from 'react-router-dom'

import './App.css'

function App() {
  
  return (
    <>
      <h1 className="font-bold text-3xl text-center mr-20">Call To Api</h1>
    <CartProvider>
      <Cart />
      <Card />
    </CartProvider>
    </>
  )
}

export default App
