import React from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import Subhadding from '../components/Subhadding'
import Inpout from '../components/Inpout'
import Btn from '../components/Btn'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';

const Contract = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <>
            <Container className={'py-28'} >

                <Hadding className={'text-5xl font-bold font-dm pb-2'} hedText={'Contacts'} />
                
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

                <div className="w-1/2">
                    <Hadding className={'text-3xl font-bold font-dm pt-28'} hedText={'Fill up a Form'} />
                    <div className=" border-b py-5">
                        <Subhadding className={'text-base text-black font-bold font-dm pb-2 '} subText={'Name'} />
                        <Inpout inputText={'Name'} playholder={'Enter Your Name'} />
                    </div>
                    <div className=" border-b py-5">
                        <Subhadding className={'text-base text-black font-bold font-dm pb-2 '} subText={'Email'} />
                        <Inpout inputText={'Email'} playholder={'Enter Your Email'} />
                    </div>
                    <Subhadding className={'text-base text-black font-bold font-dm pb-2 pt-2 '} subText={'Message'} />
                    <textarea name="" id="" rows='5' cols="30" className='w-full border-b' placeholder='Your message here' ></textarea>
                    <Btn btnName={'Post'} className={'px-14 mt-5'} />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1130616315368!2d90.35997387605259!3d23.8145782863081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1d31fb91605%3A0x767e968a131da6cf!2sChandpur!5e0!3m2!1sen!2sbd!4v1708093259277!5m2!1sen!2sbd" width="100%" height="450"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mt-20'></iframe>

            </Container>
        </>
    )
}

export default Contract