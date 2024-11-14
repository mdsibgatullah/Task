import React from 'react'
import Hero from '../../Components/Hero/Hero'
import FlashDeals from '../../Components/FlashDeals/FlashDeals'
import PopularHotel from '../../Components/PopularHotel/PopularHotel'
import Frequently from '../../Components/Frequently/Frequently'
import PopularBus from '../../Components/PopularBus/PopularBus'
import OurApp from '../../Components/OurApp/OurApp'
import WeAccept from '../../Components/WeAccept/WeAccept'
import Slider from '../../Components/Slider/Slider'
import TrendingFlight from '../../Components/TrendingFlight/TrendingFlight'

export default function Home() {
  return (
    <div>
      <Hero/>
      <TrendingFlight/>
      <Frequently />
      <FlashDeals/>
      <PopularHotel />
      <PopularBus/>
      <OurApp/>
      <WeAccept/>
    </div>
  )
}
