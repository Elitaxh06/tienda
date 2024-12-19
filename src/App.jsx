import { Routing } from './Routes/Routing'
import { useEffect } from 'react'
// import { BrowserRouter, useRoutes } from 'react-router-dom'

import './App.css'

function App() {
  console.log('⚠️Este es un lugar para desarrolladores no intentes vulnerar la seguridad de este sitio⚠️')    
  return (
    <>
      <h1 className="titulo font-bold text-3xl text-center ">⚠️ Sitio en Desarrollo - Tienda React</h1>
      <Routing />
    </>
  )
}

export default App
