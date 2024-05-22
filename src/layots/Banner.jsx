import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <Link>
    <Image className='w-full' src={banner} alt='banner.png'/>
    
    </Link>
  )
}

export default Banner