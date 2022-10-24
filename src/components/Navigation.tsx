import React from 'react'
import Button from './Button'

import menu from '../assets/menu.svg'
import NFTExplore from './NFTExplore'

const navigations = ['Home', 'About', 'Roadmap', 'Showcase', 'Team', 'Faq']

const Navigation = () => {
  return (
    <section id="navigation" className="h-[5rem] flex justify-center items-center">
      <div className="w-[85%] flex justify-between items-center">
        <p className="cursiveFont text-[4rem] font-bold">W.</p>
        <div className="lg:block hidden">
          {navigations.map((item) => {
            return (
              <a href={`#${item.toLocaleLowerCase()}`} className="mx-4">
                {item}
              </a>
            )
          })}
        </div>
        <Button text={'Connect Wallet'} display="lg:block hidden" />
        <img src={menu} alt="menu" className="lg:hidden block" />
        <NFTExplore style="lg:hidden block w-[4rem] h-[4rem]" styleSecondary="w-[1.5rem] h-[1.5rem]" />
      </div>
    </section>
  )
}

export default Navigation
