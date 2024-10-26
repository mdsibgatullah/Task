import React from 'react'
import "./styles/main.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import FlashDeals from './Components/FlashDeals/FlashDeals'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FlashDeals/>
    </div>
  )
}

export default App
