import React from 'react'
import SvgComponent from './Vector'

import vector from '../assets/vector.svg'

const Roadmap = () => {
  return (
    <section id="roadmap" className="">
      <div className="flex justify-center items-start">
        <p className="text-[3rem] border-b-2 border-solid">Roadmap</p>
      </div>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div className="absolute top-[0.5rem] left-[50%] -translate-x-[50%]	w-[100%] h-[100%] overflow-hidden">
          <SvgComponent className="w-[100%] h-[100%]" />
        </div>
      </div>
    </section>
  )
}

export default Roadmap
