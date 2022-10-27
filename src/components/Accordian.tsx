import React, { useState } from 'react'

import add from '../assets/add.svg'

const Accordian = ({ title, content }: { title: string; content: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-[100%] mb-6 border-b-2 border-solid pb-4 border-dimBlack">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        <span className="mb-4 text-[0.875rem] font-medium">{title}</span>
        <img src={add} alt="add" className="stroke-0 w-[1rem] h-[auto]" />
      </div>
      {open ? <p className="text-[0.875rem] text-dimBlack">{content}</p> : null}
    </div>
  )
}

export default Accordian
