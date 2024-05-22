import React from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import Subhadding from '../components/Subhadding'
import Flex from '../components/Flex'
import Inpout from '../components/Inpout'
import Btn from '../components/Btn'

const Login = () => {
    return (
        <>
            <Container className={'py-28'} >
                <Hadding className={'text-5xl font-bold'} hedText={'Login'} />

                <div className="border-b-2">

                    <Subhadding className={'text-base w-[620px] leading-7 mt-32 pb-14 '} subText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
                </div>
                <div className="">
                    <Hadding className={'font-bold text-4xl font-dm mt-12'} hedText={'Returning Customer'} />
                </div>
                <Flex className={'gap-10'}>
                    <div className="w-[500px] border-b-2 pb-5 mt-12">
                        <Hadding className={'font-bold text-lg pb-3'} hedText={'Email address'}/>
                        <Inpout inputText={'Email'} playholder={'Enter Your Email'} />
                    </div>
                    <div className="w-[500px] border-b-2 pb-5 mt-12">
                        <Hadding className={'font-bold text-lg pb-3'} hedText={' Password'}/>
                        <Inpout inputText={'Password'} playholder={'Password'} />
                    </div>
                </Flex>
                <div className="border-b-2 pb-12">
                <Btn className={'px-16 mt-8 text-base font-semibold'} btnName={'Log in'}/>

                </div>
                <div className="">
                <Hadding className={'font-bold text-4xl mt-10 pb-3'} hedText={' New Customer'}/>
                <Subhadding className={'text-base w-[620px] leading-7 mt-10 pb-10 '} subText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
                <Btn className={'px-16 mt-8 text-base font-semibold'} btnName={'Continue'}/>
                </div>
            </Container>


        </>
    )
}

export default Login