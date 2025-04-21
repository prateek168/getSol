import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
   <div className='h-screen text-white bg-zinc-800'>
    <Header/>
    <Hero/>
    <Footer/>
   </div>
  )
}

export default App