import React from 'react'

import Navbar from './components/Navbar'
import Slider from './components/partials/Slider'
import About from './components/partials/About'
import Products from './components/partials/Products'

export default function Home() {
  return (
    <>
        <Slider/>
    
            <About/>
            <Products/>
      
    </>
  )
}
