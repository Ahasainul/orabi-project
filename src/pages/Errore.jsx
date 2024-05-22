import React from 'react'
import Container from '../components/Container'
import Hadding from '../components/Hadding'
import Subhadding from '../components/Subhadding'
import Inpout from '../components/Inpout'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'

const Errore = () => {
  return (
   <>
   <Container>
   <div className="mx-auto text-center py-28">
   <Hadding  className={'text-9xl font-bold '} hedText={'404'}/>
   <Subhadding className={'px-[480px] pt-10 text-base font-dm '} subText={"The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"}/>
   </div>
   <div className="w-[600px] relative pb-20 mx-auto">
    <Inpout className={'border w-full py-5 pl-5 '} playholder={'Type to search'}/>
    <FaSearch className='absolute top-6 right-6' />
   </div>
 <div className="ml-[500px] pb-28">
 <Link to='/' >
    <Btn btnName={'Back to Home'}/>
   </Link>
 </div>
    </Container>
    
    
    </>
  )
}

export default Errore