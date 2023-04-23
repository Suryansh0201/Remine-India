import React from 'react'
import './navbar.css'
import Logo from '../../images/logo.jpg'
import WhyRecycle from '../Pages/Why Recycle/whyRecycle'
const navbar = () => {
  return (
    <div className='main-home'>
    
    <div className='l-nav'>
        <img src={Logo} alt='logo' className='logo'/>
    </div>
    <div className='r-nav'>
    <ul className='list'>
          <li><a href='whyRecycle'>Why Recycle?</a></li>
          <li><a href="#recycling-process">Recycling Process</a></li>
          <li><a href="#accepted-items">Accepted Items</a></li>
          <li><a href="#find-recycling-center">Find a Recycling Center</a></li>
          <li><a href="#tips-for-recycling">Tips for Responsible Recycling</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
        </div>
        </div>
    
        
  )
}

export default navbar