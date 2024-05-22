import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import sun from '../assets/sunglass.png'
import pute from '../assets/pute.png'
import cup from '../assets/cup.png'
import cat from '../assets/cat.png'
import Hadding from '../components/Hadding'
import { FaStar, FaPlus } from "react-icons/fa";
import Subhadding from '../components/Subhadding'
import Colour from '../components/Colour'
import Btn from '../components/Btn'

const Proudct = () => {
    return (
        <>
            <Container className={'py-10'}>
                <Flex className={'gap-10'}>
                    <div className="w-1/2">
                        <Image className={'w-full'} src={sun} />
                    </div>
                    <div className="w-1/2">
                        <Image className={'w-full'} src={pute} />
                    </div>
                </Flex>
                <Flex className={'gap-10 mt-10'}>
                    <div className="w-1/2">
                        <Image className={'w-full'} src={cat} />
                    </div>
                    <div className="w-1/2">
                        <Image className={'w-full'} src={cup} />
                    </div>
                </Flex>
                <Hadding className={'text-4xl font-bold font-dm mt-10'} hedText={'Product'} />
                <div className="">
                    <Flex className={'gap-2 mt-6'}>
                        <FaStar className='text-yellow-500 text-1xl' />
                        <FaStar className='text-yellow-500 text-1xl' />
                        <FaStar className='text-yellow-500 text-1xl' />
                        <FaStar className='text-yellow-500 text-1xl' />
                        <FaStar className='text-yellow-500 text-1xl' />
                        <Subhadding subText={'1 Review'} className={'ml-4 text-sm'} />
                    </Flex>
                    <Flex className={'mt-4 items-center border-b-2 w-1/2 pb-5 '}>

                        <h2 className='text-base  text-ash'><s>$88.00</s></h2>
                        <h2 className='text-lg font-bold ml-5 text-ash'>$44.00</h2>
                    </Flex>
                </div>
                <Flex className={'gap-3 items-center mt-6'}>
                    <Subhadding className={'font-bold  text-black mr-5'} subText={'COLOR:'} />
                    <Colour className={'bg-orange-500'} />
                    <Colour className={'bg-yellow-500'} />
                    <Colour className={'bg-green-500'} />
                    <Colour className={'bg-red-500'} />
                    <Colour className={'bg-teal-500'} />

                </Flex>
                <Flex className={'mt-5 '}>
                    <Subhadding className={'font-bold  text-black mr-5'} subText={'Size:'} />
                    <select className='w-36 border ml-14 px-2'>
                        <option >S</option>
                        <option>L</option>
                        <option>M</option>
                        <option>XL</option>
                        <option>XXl</option>
                    </select>
                </Flex>
                <Flex className={'mt-5 border-b-2 w-1/2 pb-8'}>
                    <Subhadding className={'font-bold  text-black mr-5'} subText={'QUANTITY:'} />
                    <select className='w-36 border ml-1 px-2'>
                        <option >S</option>
                        <option>L</option>
                        <option>M</option>
                        <option>XL</option>
                        <option>XXl</option>
                    </select>
                </Flex>
                <Flex className={'py-5  border-b-2 w-1/2'}>
                    <Subhadding className={'font-bold text-black mr-5'} subText={'STATUS:'} />
                    <Subhadding className={' mr-5'} subText={'In stock'} />
                </Flex>
                <Flex className={'py-8 gap-3  border-b-2 w-1/2 '}>
                    <Btn className={'px-8 hover:bg-white border  hover:text-black'} btnName={'Add to Wish List'} />
                    <Btn className={'px-12 hover:bg-white border  hover:text-black'} btnName={'Add to Cart '} />
                </Flex>
                <Flex className={'w-1/2 py-8  border-b-2 justify-between'}>
                    <Subhadding className={'font-bold  text-black mr-5'} subText={'FEATURES & DETAILS'} />
                    <FaPlus />
                </Flex>
                <Flex className={'w-1/2 py-8  border-b-2 justify-between'}>
                    <Subhadding className={'font-bold  text-black mr-5'} subText={'SHIPPING & RETURNS'} />
                    <FaPlus />
                </Flex>
                <Subhadding subText={'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} className={' text-base w-1/2 py-8 font-semibold'} />
            </Container>

        </>
    )
}

export default Proudct