import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Hadding from '../components/Hadding'
import List from '../components/List'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import fute from '../assets/logotow.png'
import { FaFacebookF ,FaLinkedinIn, } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Subhadding from '../components/Subhadding'


const Futter = () => {
    return (
        <>
            <div className="bg-navBg ">
                <Container className={'py-10'}>
                    <Flex>
                        <div className="w-width">
                            <Hadding className={'font-dm font-bold  text-xl'} hedText={'MENU'} />
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Home'} /></Link>
                            <Link>

                                <List className={'pt-5 text-ash text-base'} manuName={'Shop'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'About'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Contacts'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Journal'} /></Link>
                        </div>
                        <div className="w-width">
                            <Hadding className={'font-dm font-bold text-xl'} hedText={'SHOP'} />
                            <Link>

                                <List className={'pt-5 text-ash text-base'} manuName={'Category 1'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Category 2'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Category 3'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Category 4'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Category 5'} /></Link>
                        </div>
                        <div className="w-width">
                            <Hadding className={'font-dm font-bold text-xl'} hedText={'SHOP'} />
                            <Link>

                                <List className={'pt-5 text-ash text-base'} manuName={'Privacy Policyry '} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Terms & Conditions'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Special E-shop'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Shipping'} /></Link>
                            <Link>
                                <List className={'pt-5 text-ash text-base'} manuName={'Secure Payments'} /></Link>
                        </div>
                        <div className="w-widthtow">
                            <Hadding className={'font-dm font-bold text-xl'} hedText={'(052) 611-5711'} />
                            <Hadding className={'font-dm font-bold text-xl pt-2'} hedText={'company@domain.com'} />
                            <Link>

                                <List className={'pt-5 text-ash text-base'} manuName={'575 Crescent Ave. Quakertown, PA 18951 '} /></Link>
                           
                        </div>
                        <div className="w-widthtow">
                           <Link to='/'>
                           <Image src={fute} alt={'logotow.png'}/>
                           </Link>
                        </div>
                    </Flex>
                    <div className="pt-20">
                   <Flex className={'items-center justify-between mr-3'}>
                   <Flex className={'gap-5'}>
                    <Link>    <FaFacebookF /></Link>
                       <Link> <FaLinkedinIn /></Link>
                        <Link to='/'><IoLogoInstagram /></Link>
                        </Flex>
                        <Subhadding subText={'2020 Orebi Minimal eCommerce Figma Template by Adveits'}/>
                   </Flex>
                    </div>

                </Container>
            </div>





        </>
    )
}

export default Futter