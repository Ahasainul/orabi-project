import React from 'react'
import Next from './Next';

const NextArow = (props) => {
    const { className,  onClick } = props;
  return (
    <div
    className={`top-1/2 left-5 absolute translate-y-[-50%] z-10`}
    onClick={onClick}
  >

    <Next/>
  </div>
  )
}

export default NextArow