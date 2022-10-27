import React from 'react'

import nftCircle from '../assets/nftCircle.png'

const NFTExplore = ({ style1, style2 }: { style1?: string; style2?: string }) => {
  return (
    <div className={`${style1} relative flex justify-center items-center`}>
      <span className={`${style2} flex items-center justify-center bg-black rounded-full text-white`}>↓</span>
      <img
        src={nftCircle}
        alt="nftCircle"
        className="absolute w-[100%] border border-solid border-black rounded-full"
      />
    </div>
  )
}

export default NFTExplore
