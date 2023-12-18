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



  //Animate on Scroll LESss gooo
  //Increase font size and change font style
  

  return (
    <div>
      <div style={backgroundStyle}>
      <Navbar/>

      </div>
      
      <Display/>

   
      <FlexboxComponent/>
      <ResponsiveComponent/>
      <JumbotronComponent1/>
      <JumbotronComponent2/>
      <Pricing/>
      <Question/>
      <Last/>
      <FooterComponent/>
     

    </div>
  

   
      
  
  )
}

export default App
