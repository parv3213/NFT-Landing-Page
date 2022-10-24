import React from 'react'
import Button from './Button'
import Typewriter from 'typewriter-effect'

// @ts-ignore
import gif from '../assets/gif.mp4'
import NFTExplore from './NFTExplore'

const Home = () => {
  return (
    <section
      id="home"
      className="bg-white w-[100%] flex flex-col justify-center items-center"
      style={{ minHeight: 'calc(100vh - 5rem)' }}>
      <div className="w-[75%] h-[75vh] flex sm:flex-row flex-col justify-between items-center">
        <div className="w-[50%] sm:text-left text-center">
          <div className="w-[80%] font-medium">
            <h2 className="text-[3rem]">
              Discover A New Era <br className="sm:block hidden" /> Of Cool
            </h2>
            <p className="cursiveFont text-[3rem]">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('<span style="color: blue">NFTs.</span>').pauseFor(2000).deleteAll()
                  typewriter
                    .typeString('<span style="color: orange">Collectable Items.</span>')
                    .pauseFor(2000)
                    .deleteAll()
                  typewriter
                    .typeString('<span style="color: red">Ape Killers!</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
                }}
              />
            </p>
            <p className="text-[1.25rem] text-black/[0.6] mb-4">Bored Of Apes? Try Something New.</p>
            <Button text={'Explore'} />
          </div>
        </div>
        <div className="w-[50%]">
          <video src={gif} typeof="video/mp4" autoPlay loop muted className="max-w[100%] h-[auto]" />
        </div>
      </div>

      <div className="w-[85%]">
        <NFTExplore style="self-start w-[6rem] h-[6rem]" styleSecondary="w-[3rem] h-[3rem]" />
      </div>
    </section>
  )
}

export default Home
