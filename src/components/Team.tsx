import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

import AnimatedNFTCard from './AnimatedNFTCard'

import bighead from '../assets/bighead.svg'
import bighead1 from '../assets/bighead (1).svg'
import bighead2 from '../assets/bighead (2).svg'
import bighead3 from '../assets/bighead (3).svg'
import bighead4 from '../assets/bighead (4).svg'
import bighead5 from '../assets/bighead (5).svg'
import bighead6 from '../assets/bighead (6).svg'

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined
  height: number | undefined
}

// Hook
function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

const Team = () => {
  const { width, height } = useWindowSize()

  return (
    <section id="team" className="min-h-[100vh] relative">
      <Confetti width={width} height={height} numberOfPieces={100} gravity={0.03} />
      <div className="flex justify-center">
        <div className="w-[85%]">
          <div className="flex justify-center items-start mb-6">
            <p className="font-semibold text-[3rem] border-b-2 border-solid">Team</p>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <AnimatedNFTCard nft={bighead} name="PG" designation="Founder" />
            <AnimatedNFTCard nft={bighead1} name="Brooke Burns" designation="Co-Founder" />
            <AnimatedNFTCard nft={bighead2} name="Hadley Perry" designation="CEO" />
            <AnimatedNFTCard nft={bighead3} name="Valentine Fowler" designation="CTO" />
            <AnimatedNFTCard nft={bighead4} name="Ford Fairbank" designation="Manager" />
            <AnimatedNFTCard nft={bighead5} name="Ray Hodges" designation="Web3 Developer" />
            <AnimatedNFTCard nft={bighead6} name="Bob Titterington" designation="Solidity Developer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
