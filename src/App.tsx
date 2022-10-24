import React from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App w-[100%]">
      <Navigation />
      <Home />
      <About />
    </div>
  )
}

export default App
