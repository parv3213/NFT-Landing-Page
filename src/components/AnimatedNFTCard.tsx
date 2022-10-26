import React from 'react'

const AnimatedNFTCard = ({ nft, name, designation }: { nft: any; name: string; designation: string }) => {
  return (
    <div className="z-[10]">
      <div className="mx-8 my-6 w-[15rem] flex flex-col border-solid border-black border-2 rounded-[20px] backdrop-blur-sm">
        <div className="bg-skin rounded-[20px] border-solid border-black border-[1px] m-2 z-[10]">
          <div className="w-[100%] h-[100%] hover:-translate-y-8 hover:scale-110 duration-300">
            <img src={nft} alt="bighead" />
          </div>
        </div>
        <div className="px-4 py-4 flex justify-center items-center text-black bg-transparent rounded-[20px]">
          <div className="flex flex-col justify-center items-center">
            <span className="font-medium text-[1.25rem]">{name.toLocaleUpperCase()}</span>
            <span className="font-normal text-[1rem]">{designation}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedNFTCard
