import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/partials/Slider'
import About from './components/partials/About'

export default function Home() {
  return (
    <>
        <Slider/>
    <div className="container">
        <div className="container-fluid">
            <About/>
        </div>
    </div>
    </>
  )
}
