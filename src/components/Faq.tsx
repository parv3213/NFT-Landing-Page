import React from 'react'
import Accordian from './Accordian'

const Faq = () => {
  return (
    <section id="faq" className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center bg-black text-white">
      <p className="font-semibold text-[3rem] border-b-2 border-solid mb-[7rem]">FAQ</p>
      <div className="w-[75%] flex md:flex-row flex-col">
        <div className="w-[100%] flex justify-center">
          <div className="w-[85%] flex flex-col">
            <Accordian
              title="WHERE CAN I VIEW MY NFTS?"
              content="Once minted or bought simply connect to your OpenSea account to view your NFTs."
            />
            <Accordian
              title="WHAT IS THE METAVERSE?"
              content="A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets."
            />
            <Accordian
              title="WHY DO WE NEED ROYALTIES?"
              content="The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests."
            />
          </div>
        </div>
        <div className="w-[100%]  flex justify-center">
          <div className="w-[85%] flex flex-col">
            <Accordian
              title="HOW CAN I USE MY NFT?"
              content="You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs."
            />
            <Accordian
              title="WHAT ARE THE WEIRDOS?"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in."
            />
            <Accordian
              title="WHAT IS THE FUSION PROCESS?"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
