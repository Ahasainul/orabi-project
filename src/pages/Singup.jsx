import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import Subhadding from '../components/Subhadding'
import Inpout from '../components/Inpout'
import { FaChevronDown } from "react-icons/fa";
import axios from 'axios'
import Btn from '../components/Btn'

const Singup = () => {
    let [all, setall] = useState([])
    useEffect(() => {
        async function all() {
            let data = await axios.get('https://restcountries.com/v3.1/all')
            setall(data.data)

        }
        all()
    }),
        ([])





    return (
        <>
            <Container>
                <div className="py-28 ">
                    <Hadding className={'font-bold font-dm text-4xl '} hedText={'Sign up'} />
                </div>
                <div className=" border-b-2">
                    <Subhadding className={'text-ash text-base leading-7 w-[620px] pb-16 '} subText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
                </div>
                <div className=" border-b-2">
                    <div className="w-9/12 ">
                        <Hadding className={'font-bold font-dm text-5xl py-16 '} hedText={'Your Personal Details'} />
                        <div className="flex flex-wrap pb-16">
                            <div className=" w-[512px] pb-3 border-b-2">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'First Name '} />
                                <Inpout className={'pb-2'} inputText={'text'} playholder={'First Name'} />
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  ml-10">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Last Name '} />
                                <Inpout className={'pb-2'} inputText={'text'} playholder={'Last Name'} />
                            </div>

                            <div className=" w-[512px] border-b-2 pb-3  pt-5">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Email address'} />
                                <Inpout className={'pb-2'} inputText={'Email'} playholder={'company@domain.com'} />
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  ml-10 pt-5">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Telephone'} />
                                <Inpout className={'pb-2'} inputText={'Number'} playholder={'Your phone number'} />
                            </div>
                        </div>
                    </div>

                </div>


                <div className=" border-b-2">
                    <div className="w-9/12 ">
                        <Hadding className={'font-bold font-dm text-4xl py-16 '} hedText={'New Customer'} />
                        <div className="flex flex-wrap pb-16">
                            <div className=" w-[512px] pb-3 border-b-2">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Address 1 '} />
                                <Inpout className={'pb-2'} inputText={'text'} playholder={'4279 Zboncak Port Suite 6212'} />
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  ml-10">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Address 2 '} />
                                <Inpout className={'pb-2'} inputText={'text'} playholder={'_'} />
                            </div>

                            <div className=" w-[512px] border-b-2 pb-3  pt-5">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Country'} />
                                <div className="w-full">


                                    <select className='w-full' >

                                        {all.map(item =>
                                            <option value=" city">    {item.name.common} </option>
                                        )}

                                    </select>

                                </div>
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  ml-10 pt-5">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Post Code'} />
                                <Inpout className={'pb-2'} inputText={'Number'} playholder={'05228'} />
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  pt-5">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Country'} />
                                <div className="">


                                    <select className='w-full' >

                                        {all.map(item =>
                                            <option value=" city">    {item.region} </option>
                                        )}

                                    </select>

                                </div>
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  ml-10 pt-5">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Region/State'} />
                                <Inpout className={'pb-2'} inputText={''} playholder={'Please select'} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" border-b-2">
                    <div className="w-9/12 ">
                        <Hadding className={'font-bold font-dm text-4xl py-16 '} hedText={'Your Password'} />
                        <div className="flex flex-wrap pb-16">
                            <div className=" w-[512px] pb-3 border-b-2">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Password'} />
                                <Inpout className={'pb-2'} inputText={'Password'} playholder={'Password'} />
                            </div>
                            <div className=" w-[512px] border-b-2 pb-3  ml-10">
                                <Hadding className={'font-bold font-dm text-xl pb-5'} hedText={'Repeat Password  '} />
                                <Inpout className={'pb-2'} inputText={'Password'} playholder={'Repeat Password'} />
                            </div>


                        </div>
                    </div>

                </div>
                <div className=" pt-10 flex gap-x-5">
                    <input type="checkbox" />
                    <Subhadding className={'text-sm '} subText={'I have read and agree to the Privacy Policy'} />
                </div>
                <div className=" pt-10 flex items-center pb-10 gap-x-5">

                    <Subhadding className={'text-sm '} subText={'Subscribe Newsletter'} />
                    <div className="flex gap-x-4 items-center">
                        <input type="checkbox" /> <Subhadding subText={'Yes'} />
                        <input type="checkbox" /> <Subhadding subText={'No'} />
                    </div>
                </div>
                <div className="pb-10">
                    <Btn btnName={'Log in'} className={'px-20 '} />

                </div>



            </Container>

        </>
    )
}

export default Singup