import { useState } from 'react'
import './App.css'
import { Brand, CTA, Navbar} from './components/index'
import { Footer, Blog, Posibility, Features, WhatGPT3, Header } from './containers'

function App() {
  

  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features />
      <Posibility />
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
