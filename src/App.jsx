import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchForm from './components/SearchForm'
import FeaturesSection from './components/FeaturesSection'
import TradingActivity from './components/TradingActivity'
import FollowUsCard from './components/FollowUsCard'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchForm />
      <TradingActivity />
      <FeaturesSection />
      <FollowUsCard />
      <FAQSection />
      <Footer />
    </>
  )
}

export default App
