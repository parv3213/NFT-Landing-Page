import React from 'react'
import './App.css'
import About from './components/About'
import Faq from './components/Faq'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Roadmap from './components/Roadmap'
import Showcase from './components/Showcase'
import Team from './components/Team'

function App() {
  return (
    <div className="App w-[100%] overflow-hidden">
      <Navigation />
      <Home />
      <About />
      {/* TODO add fixed up arrow */}
      {/* TODO complete */}
      {/* <Roadmap /> */}
      <Showcase />
      <Team />
      <Faq />
    </div>
  )
}

export default App
