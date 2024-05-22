import React from 'react'

const Inpout = ({playholder, inputText, className }) => {
  return (
<input type={inputText}  placeholder={playholder} className={className}/>
  )
}

export default Inpout