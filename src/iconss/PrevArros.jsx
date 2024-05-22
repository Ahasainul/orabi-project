import React from 'react'
import Prev from './Prev';

const PrevArros = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`top-1/2 right-5 absolute translate-y-[-50%] z-10 `}

      onClick={onClick}
    >
      <Prev />
    </div>
  )
}

export default PrevArros