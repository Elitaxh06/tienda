import { useState } from 'react'
import { CartProvider } from './Context/CarContext'
import { Card } from './components/Card/Card'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { Routing } from './Routes/Routing'
// import { BrowserRouter, useRoutes } from 'react-router-dom'

import './App.css'

function App() {
  
  return (
    <>
      <h1 className="font-bold text-3xl text-right mr-20">⚠️ Sitio en Desarrollo - Tienda React</h1>
      <Routing />
    </>
  )
}

export default App
