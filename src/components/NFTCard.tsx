import React from 'react'

import eth from '../assets/eth.png'

const NFTCard = ({ nft, nftId, nftPrice }: { nft: any; nftId: string; nftPrice: string }) => {
  return (
    <div className="m-8 w-[15rem] flex flex-col border-solid border-white/70 border-2 rounded-[20px]">
      <div className="bg-white rounded-t-[20px]">
        <img src={nft} alt="bighead" />
      </div>
      <div className="px-4 py-4 flex justify-between items-center text-white bg-black rounded-[20px]">
        <div className="flex flex-col">
          <span className="text-white/50 text-[0.85rem] font-semibold">Weirdos</span>
          <span className="text-[1rem]">#{nftId}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white/50 text-[0.85rem] font-semibold">Price</span>
          <span className="flex justify-center items-center">
            <img src={eth} alt="eth" className="w-[1rem] h-[auto]" />
            <span className="text-[1rem]">{nftPrice}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NFTCard
