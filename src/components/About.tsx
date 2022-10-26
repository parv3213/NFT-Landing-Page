import React from 'react'
import Button from './Button'

import bighead from '../assets/bighead.svg'
import bighead1 from '../assets/bighead (1).svg'
import bighead2 from '../assets/bighead (2).svg'
import bighead3 from '../assets/bighead (3).svg'
import bighead4 from '../assets/bighead (4).svg'
import bighead5 from '../assets/bighead (5).svg'
import bighead6 from '../assets/bighead (6).svg'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, EffectCards, Pagination, Navigation } from 'swiper'

const About = () => {
  return (
    <section id="about" className="min-h-[100vh] w-[100%] bg-black flex justify-center">
      <div className="w-[85%] text-white flex xl:flex-row flex-col items-center m-8">
        <div className="flex-1 xl:mb-0 mb-8">
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            navigation={true}
            effect={'cards'}
            grabCursor={true}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, EffectCards, Pagination, Navigation]}
            className="mySwiper md:w-[25vw] ss:w-[50vw] w-[70vw] lg:h-[70vh] h-[45vh]  text-black">
            <SwiperSlide>
              <img src={bighead} alt="weirdoImg" className="bg-skin h-[100%] w-[100%]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bighead1} alt="weirdoImg" className="bg-skin h-[100%] w-[100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bighead2} alt="weirdoImg" className="bg-skin h-[100%] w-[100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bighead3} alt="weirdoImg" className="bg-skin h-[100%] w-[100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bighead4} alt="weirdoImg" className="bg-skin h-[100%] w-[100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bighead5} alt="weirdoImg" className="bg-skin h-[100%] w-[100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bighead6} alt="weirdoImg" className="bg-skin h-[100%] w-[100%" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex-1">
          <div className="xl:w-[80%] w-[100%] xl:text-left text-center">
            <h2 className="text-[3rem] font-semibold">
              Welcome To The <br className="sm:block hidden" /> Weirdos Club.
            </h2>
            <p className="text-[1.25rem] mt-2 font-semibold leading-5">
              The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as
              ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
            </p>
            <p className="test-[1rem] text-white/70 my-8 font-medium leading-4">
              With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive
              group of successful investors. Join an ambitious ever-growing community with multiple benefits and
              utilities.
            </p>
            <Button text="JOIN OUR DISCORD" display="bg-white text-black" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
