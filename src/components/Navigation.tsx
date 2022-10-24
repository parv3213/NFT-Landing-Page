import React, { useState } from 'react'
import Button from './Button'

import menu from '../assets/menu.svg'
import arrowDown from '../assets/arrowDown.svg'
import NFTExplore from './NFTExplore'

const navigations = ['Home', 'About', 'Roadmap', 'Showcase', 'Team', 'Faq']

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen((prev) => !prev)

  return (
    <section id="navigation">
      <div className="h-[5rem] flex justify-center items-center">
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
          <img
            src={menu}
            alt="menu"
            className={`lg:hidden block cursor-pointer ${open && 'hidden'}`}
            onClick={handleClick}
          />
          <img
            src={arrowDown}
            alt="arrowDown"
            className={`lg:hidden block ${!open && 'hidden'}`}
            onClick={handleClick}
          />
          <NFTExplore style="lg:hidden block w-[4rem] h-[4rem]" styleSecondary="w-[1.5rem] h-[1.5rem]" />
        </div>
      </div>

      <div
        className={`lg:hidden block ${!open && 'hidden'} w-[100%] fixed z-[50] bg-white/80 backdrop-blur-[2px]`}
        style={{ height: 'calc(100vh - 5rem)' }}>
        <div className="flex flex-col justify-center items-center h-[100%]">
          {navigations.map((item) => {
            return (
              <a href={`#${item.toLocaleLowerCase()}`} className="mx-4 mb-6">
                {item}
              </a>
            )
          })}
          <Button text={'Connect Wallet'} />
        </div>
      </div>
    </section>
  )
}

export default Navigation
