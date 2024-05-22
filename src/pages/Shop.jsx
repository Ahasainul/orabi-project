import React from 'react'
import Hadding from '../components/Hadding'
import Container from '../components/Container'
import Subhadding from '../components/Subhadding'
import { FaPlus } from "react-icons/fa";
import Flex from '../components/Flex';
import Iconetow from '../iconss/Iconetow';
import Iconethree from '../iconss/Iconethree';
import CardBox from '../components/CardBox';
import { BiSolidUpArrow } from "react-icons/bi";
import puta from '../assets/pota.png'
import cat from '../assets/cat.png'
import bag from '../assets/bag.png'
import { useEffect, useState } from "react"

import { useSelector } from 'react-redux';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Proadct from '../components/Proadct';

const Shop = () => {
    // let data = useSelector((state) => state.bradcome.currentname);
    const breadcrumbs = useBreadcrumbs();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const faceData = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('https://dummyjson.com/products?limit=16');
            setProducts(data);
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };
    console.log(products);
    useEffect(() => {
        faceData();
    }, []);

    return (
        <>
            <Container className={'py-20'}>
                <Hadding className={'text-5xl font-bold font-dm '} hedText={'Products'} />
                {/* bradcome  */}
                {/* <Flex className={'items-center '}>
                    {data} <h4 className='mt-1'>/</h4>
                    <p className='pt-2 first-letter:uppercase'>{window.location.pathname.replace("/", "").replace("/", "")}</p>
                </Flex> */}
                {/* bradcome  */}

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


                <div className="flex pt-24">
                    <div className="w-[20%]">
                        <div className="">
                            <Hadding className='pt-10 pb-20 text-xl font-bold' hedText={'Shop by Category'} />
                            <div className="">
                                <Flex className={'justify-between items-center pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />
                                    <FaPlus className='text-base text-ash ' />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />


                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center  pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />
                                    <FaPlus className='text-base text-ash ' />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'justify-between items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Category 1'} />

                                </Flex>
                            </div>

                        </div>
                        <div className="mt-12 ">
                            <div className="pb-20 ">
                                <Flex className={'justify-between items-center  '}>
                                    <Hadding className='text-xl font-bold' hedText={'Shop by Color'} />
                                    <BiSolidUpArrow />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pb-5 border-b'}>
                                    <div className="w-3 h-3 bg-black rounded-full" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />


                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={' gap-5 items-center pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={' gap-5 items-center  pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 bg-green-700 rounded-full" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'items-center gap-5 pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 bg-red-700 rounded-full" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <div className="w-3 h-3 bg-yellow-600 rounded-full" ></div>
                                    <Subhadding className={'font-dm text-base '} subText={'Color 1 '} />

                                </Flex>
                            </div>

                        </div>
                        <div className="mt-12 ">
                            <div className="pb-20 ">
                                <Flex className={'justify-between items-center  '}>
                                    <Hadding className='text-xl font-bold' hedText={'Shop by Brand'} />
                                    <BiSolidUpArrow />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 1'} />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 2 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 3 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 4 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'Brand 5 '} />

                                </Flex>
                            </div>
                        </div>
                        <div className="mt-12 ">
                            <div className="pb-20 ">
                                <Flex className={'justify-between items-center  '}>
                                    <Hadding className='text-xl font-bold' hedText={'Shop by Price'} />
                                    <BiSolidUpArrow />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />
                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99 '} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />

                                </Flex>
                            </div>
                            <div className="">
                                <Flex className={'gap-5 items-center pt-5 pb-5 border-b'}>
                                    <Subhadding className={'font-dm text-base '} subText={'$0.00 - $9.99'} />

                                </Flex>
                            </div>
                        </div>


                    </div>


                    <div className="w-[80%] mt-12 ml-10">
                        <div className="flex justify-between">
                            <Flex className={'gap-3'}>
                                <Iconetow />
                                <Iconethree />
                            </Flex >

                            <div className="flex">
                                <div className="flex items-center gap-3">
                                    <Subhadding className={'text-base text-ash'} subText={'Sort by:'} />

                                    <select className='w-40 px-4 py-2 border text-ash '>
                                        <option value=""  > Featured</option>
                                        <option value=""  > one</option>
                                        <option value=""  > tow</option>
                                        <option value=""  > three</option>
                                        <option value=""  > four</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-3 ml-9">
                                    <Subhadding className={'text-base text-ash'} subText={'Sort by:'} />

                                    <select className='px-2 py-2 border w-28 text-ash '>
                                        <option value=""  > 30</option>
                                        <option value=""  > one</option>
                                        <option value=""  > tow</option>
                                        <option value=""  > three</option>
                                        <option value=""  > four</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* start */}
                        <div className="grid grid-cols-4 gap-6 pt-5">
                        {loading
                            ? 'loding.....'
                            : products &&
                            products.products.map((el) => <Proadct  products={el} />)}

                        </div>
                        


                    </div>
                </div>
            </Container>
        </>
    )
}

export default Shop