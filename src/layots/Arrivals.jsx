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
import CardBox from '../components/CardBox'
import cat from '../assets/cat.png'
import image from '../assets/Image.png'
import buskat from '../assets/buskat.png'
import clok from '../assets/cup.png'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Prev from '../iconss/Prev'
import PrevArros from '../iconss/PrevArros'
import NextArow from '../iconss/NextArow'
const Arrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <PrevArros />,
    prevArrow: <NextArow />,

  };
  return (
    <>
      <Container className='py-5'>
        <div className="mr-5">
          <Hadding className='font-dm font-bold text-5xl' hedText='New Arrivals' />
        </div>

        <Slider {...settings} >

          <div className="">
            <CardBox ProcdtImg={cat} className="className={'w-[95%]'}" btnName={'New'} alt={'cat.png'} />
          </div>


          <div className="">
            <CardBox ProcdtImg={image} className="className={'w-[95%]'}" btnName={'New'} alt={'cat.png'} />

          </div>
          <div className="">
            <CardBox ProcdtImg={buskat} className="className={'w-[95%]'}" btnName={'New'} alt={'cat.png'} />

          </div>
          <div className="">
            <CardBox ProcdtImg={clok} className="className={'w-[95%] !im'}" btnName={'New'} alt={'cat.png'} />
          </div>

        </Slider>

      </Container>

    </>
  )
}

export default Arrivals