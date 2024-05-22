import React from 'react'

const Btn = ({className,btnName}) => {
  return (
    <button className={`bg-black text-white px-8 py-3 font-dm font-semibold ${className}`}>{btnName}</button>
  )
}

export default Btn