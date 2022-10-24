import React from 'react'

const Button = ({ text, display }: { text: string; display?: string }) => {
  return <button className={`px-8 py-2 bg-black text-white rounded-full text-[14px] ${display}`}>{text}</button>
}

export default Button
