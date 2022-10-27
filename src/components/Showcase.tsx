import React from 'react'

import NFTCard from './NFTCard'

import bighead from '../assets/bighead.svg'
import bighead1 from '../assets/bighead (1).svg'
import bighead2 from '../assets/bighead (2).svg'
import bighead3 from '../assets/bighead (3).svg'
import bighead4 from '../assets/bighead (4).svg'
import bighead5 from '../assets/bighead (5).svg'

const Showcase = () => {
  return (
    <section id="showcase" className="min-h-[100vh] w-[100%] bg-black/90">
      <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
        <div className="flex animate-linear hover:animation-paused">
          <NFTCard nft={bighead} nftId="421" nftPrice="4.2" />
          <NFTCard nft={bighead1} nftId="201" nftPrice="2.9" />
          <NFTCard nft={bighead2} nftId="21" nftPrice="7.8" />
        </div>
        <div className="flex animate-linear-reverse hover:animation-paused">
          <NFTCard nft={bighead3} nftId="534" nftPrice="3.3" />
          <NFTCard nft={bighead4} nftId="978" nftPrice="1.5" />
          <NFTCard nft={bighead5} nftId="643" nftPrice="6.3" />
        </div>
      </div>
    </section>
  )
}

export default Showcase
