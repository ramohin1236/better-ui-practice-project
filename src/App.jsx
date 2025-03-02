import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoSlider from './components/LogoSlider'
import Featured from './components/Featured'
import Design from './components/Design'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoSlider/>
      <Featured/>
      <Design/>
    </>
  )
}

export default App
