import React from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import big from '../assets/big.png'
import bigtow from '../assets/bigtow.png'
import Subhadding from '../components/Subhadding'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';

const About = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <>
            <Container className={'py-10'}>
                <Hadding className={'text-5xl font-bold font-dm pb-2'} hedText={'About'} />
                
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    <NavLink key={match.pathname} to={match.pathname}>
                        <span className='mr-1 '>
                            {breadcrumb}
                        </span>

                        <span className='mr-1'>
                            {breadcrumbs.length - 1 !== index && '/'}

                        </span>
                    </NavLink>
                ))}


                <Flex className={'gap-10 py-10'}>
                    <div className="">
                        <Link to='/'>
                            <Image className={'w-full'} src={big} alt={'bag.png'} />

                        </Link>
                    </div>
                    <div className="">
                        <Link to='/'>
                            <Image className={'w-full'} src={bigtow} alt={'bag.png'} />

                        </Link>
                    </div>
                </Flex>
                <Hadding className={' pt-16 text-[43px] font-dm'} hedText={'Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'} />


                <Flex className={'mt-28 gap-3 pb-20'}>
                    <div className="w-1/3">
                        <Hadding className={'text-2xl font-bold font-dm'} hedText={'Our Vision'}/>
                        <Subhadding className={'text-base pr-5 pt-5'} subText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."}/>
                    </div>
                    <div className="w-1/3">
                        <Hadding className={'text-2xl font-bold font-dm'} hedText={'Our Story'}/>
                        <Subhadding className={'text-base pr-5 pt-5'} subText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."}/>
                    </div>
                    <div className="w-1/3">
                        <Hadding className={'text-2xl font-bold font-dm'} hedText={'Our Brands'}/>
                        <Subhadding className={'text-base pr-5 pt-5'} subText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
                    </div>
                </Flex>
            </Container>


        </>
    )
}

export default About