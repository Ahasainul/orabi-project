import React from 'react'

import Hadding from '../components/Hadding'
import Container from '../components/Container'
import Image from '../components/Image'
import cup from '../assets/cup.png'
import Btn from '../components/Btn'
import Subhadding from '../components/Subhadding'
import Flex from '../components/Flex'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping, FaRepeat } from "react-icons/fa6";
import Proadct from './Proadct'


const CardBox = ({ ProcdtImg, alt, btnName, className } ) => {
  const handelcard =(products)=>{
  
}
  return (
    <>
      <div className="mt-10 group ">
        <div className="relative">
          <Image className={`w-full p-2 font-dm ${className}`} src={ProcdtImg} alt={alt} />
          <Btn className='absolute top-5 left-5' btnName={btnName} />
          <div className="h-40 bg-white absolute bottom-0 left-0 w-full group-hover:visible invisible">

            <div className="pr-5  ">
              <Flex className='items-center justify-end gap-4 pt-6 '>  <button className=' hover:text-black hover:font-bold' >Add to Wish List</button>
                <FaHeart /></Flex>
         
              <Flex className='items-center justify-end gap-4 py-4 '>  <button className=' hover:text-black hover:font-bold' >Compare</button>
                <FaRepeat /></Flex>
              <Flex className='items-center justify-end gap-4  '>  <button className=' hover:text-black hover:font-bold' onClick={handelcard} >Add to Cart</button>
                <FaCartShopping /></Flex>
            </div>



          </div>
        </div>
        <div className="p-2">
          <Flex className='justify-between py-3'>
            <Hadding className='text-xl font-dm font-bold' hedText={'Basic Crew Neck Tee'} />
            <Subhadding className='text-base' subText={'$44.00'} />

          </Flex>
          <Subhadding className={'font-dm font-semibold'} subText={'black'} />
        </div>
      </div>



    </>
  )
}

export default CardBox