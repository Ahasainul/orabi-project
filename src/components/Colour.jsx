import React from 'react'

const Colour = ({className}) => {
  return (
   <ul>
    <li className={`w-6 h-6 hover:h-8 hover:w-8 transition-all rounded-full ${className}`}></li>
   </ul>
  )
}

export default Colour