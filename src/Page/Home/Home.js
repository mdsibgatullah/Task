import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import FlashDeals from '../../Components/FlashDeals/FlashDeals'
import PopularHotel from '../../Components/PopularHotel/PopularHotel'
import Frequently from '../../Components/Frequently/Frequently'
import PopularBus from '../../Components/PopularBus/PopularBus'
import OurApp from '../../Components/OurApp/OurApp'
import WeAccept from '../../Components/WeAccept/WeAccept'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Slider/>
      <Frequently />
      <FlashDeals/>
      <PopularHotel />
      <PopularBus/>
      <OurApp/>
      <WeAccept/>
      <Footer/>
    </div>
  )
}
