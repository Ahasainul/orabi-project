import React from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import CardBox from '../components/CardBox'
import rockcap from '../assets/rockcap.png'
import lamps from '../assets/lamps.png'
import hedphone from '../assets/hedphone.png'
import sunglass from '../assets/sunglass.png'
import Flex from '../components/Flex'

const Special = () => {
  return (
    <>
    <Container className={'py-10'}>
        <Hadding className={'font-dm font-bold text-5xl pb-8'} hedText={'Special Offers'}/>
        <div className="">
          <Flex className={'gap-5'}>
          <CardBox  ProcdtImg={rockcap} alt={'rockcap.png'} btnName={'New'}/>
          <CardBox  ProcdtImg={lamps} alt={'lamps.png'} btnName={'New'}/>
          <CardBox  ProcdtImg={hedphone} alt={'headphon.png'} btnName={'New'}/>
          <CardBox  ProcdtImg={sunglass} alt={'sunglass.png'} btnName={'New'}/>
          </Flex>
        </div>

    </Container>
    
    
    
    </>
  )
}

export default Special