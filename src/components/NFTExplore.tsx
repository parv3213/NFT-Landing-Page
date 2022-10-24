import React from 'react'

import nftCircle from '../assets/nftCircle.png'

const NFTExplore = ({ style, styleSecondary }: { style?: string; styleSecondary?: string }) => {
  return (
    <div className={`${style} relative flex justify-center items-center`}>
      <span className={`${styleSecondary} flex items-center justify-center bg-black rounded-full text-white`}>↓</span>
      <img
        src={nftCircle}
        alt="nftCircle"
        className="absolute w-[100%] border border-solid border-black rounded-full"
      />
    </div>
  )
}

export default NFTExplore

// import React from 'react'

// import nftCircle from '../assets/nftCircle.png'

// const NFTExplore = ({ style, styleSecondary }: { style?: string; styleSecondary?: string }) => {
//   return (
//     <div className={`${style} relative self-start flex justify-center items-center`}>
//       <span className={`${styleSecondary} flex items-center justify-center bg-black rounded-full text-white`}>↓</span>
//       <img
//         src={nftCircle}
//         alt="nftCircle"
//         className="absolute w-[100%] border border-solid border-black rounded-full"
//       />
//     </div>
//   )
// }

// export default NFTExplore
