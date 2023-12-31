import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './Product'
import About_us from './About_us'
import Services from './Services'
import Details from './Details'

function Navbar() {
  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About us</Link></li>
      <li><Link to="/Services">Services</Link></li>
    </ul>
    <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="/About" element={<About_us/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Details/:id/" element={<Details/>}/>
    </Routes>
    </>

  )
}

export default Navbar
