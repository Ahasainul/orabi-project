import React from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import Flex from '../components/Flex'
import CardBox from '../components/CardBox'
import pute from '../assets/pute.png'
import bagtow from '../assets/pota.png'
import pota from '../assets/bagtow.png'
import bag from '../assets/bag.png'

const Bestsellers = () => {
  return (
    <>
    <Container className={'py-12'}>
        <Hadding className={'font-dm font-bold text-5xl '} hedText={'Our Bestsellers'}/>
        <Flex className={'gap-5 md:flex-row flex-col'}>
        <CardBox  ProcdtImg={pute} btnName={'New'} alt={'pute.png'}/>
        <CardBox  ProcdtImg={pota} btnName={'New'} alt={'pute.png'}/>
        <CardBox  ProcdtImg={bag} btnName={'New'} alt={'pute.png'}/>
        <CardBox  ProcdtImg={bagtow} btnName={'New'} alt={'pute.png'}/>

    </Flex>
    </Container>
   
    
    </>
  )
}

export default Bestsellers
