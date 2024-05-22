import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import clock from '../assets/clock.png'
import Container from '../components/Container'

const Clock = () => {
  return (
   <>
<Container className={'py-14'}>
<Link>
   <Image src={clock} alt={'clock.png'}/>
   </Link>
</Container>
   
   </>
  )
}

export default Clock