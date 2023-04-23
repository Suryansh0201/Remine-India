import React from 'react';
import Navbar from '../Navbar/navbar';
import MidSec from '../MidSec/midsec';
import Bottom from '../Bottom/bottom';
import Footer from '../Footer/footer'
import './homepage.css'
const HomePage = () => {
  return (
    <div className='all'>
    <Navbar/>
    <MidSec/>
    <Bottom/>
    <Footer/>
    </div>
  );
};

export default HomePage;