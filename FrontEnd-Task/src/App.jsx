import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Display from './components/Display'
import FlexboxComponent from './components/Complist'
import ResponsiveComponent from './components/CompImgs'
import JumbotronComponent1 from './components/Jumbo1'
import JumbotronComponent2 from './components/Jumbo2'
import Pricing from './components/Pricing'
import Question from './components/Question'
import Last from './components/LastText'
import FooterComponent from './components/Footer'

import '../src/assets/fonts/css/satoshi.css'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const backgroundStyle={
  backgroundColor: '#cdc1ff',
backgroundImage: 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)',
color:'black'
}

const backgroundStyle2={
  backgroundColor: '#cdc1ff',
backgroundImage: 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)'
}

function App() {
  useEffect(() => {
    // Initialize AOS after the component has mounted
    AOS.init();
  }, []);



  //Animate on Scroll LESss gooo
  //Increase font size and change font style
  

  return (
    <div style={{fontFamily:'Satoshi-Variable'}}>
      <div style={backgroundStyle}>
      <Navbar/>

      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
      <Display/>
      <FlexboxComponent/>
      <ResponsiveComponent/>
      </div>
      

      <div data-aos="fade-right" data-aos-duration="2500">
      <JumbotronComponent1/>

      </div>

      <div>
      <JumbotronComponent2/>
      </div>
      
      <div data-aos="zoom-in" data-aos-duration="1600">
      <Pricing/>

      </div>
      
      <Question/>
      <div data-aos="fade-up" data-aos-duration="2500">
      <Last/>

      </div>
     
      <FooterComponent/>
     

    </div>
  

   
      
  
  )
}

export default App
