import React from 'react'
import Naver from './Naver'
import { Outlet } from 'react-router-dom'
import Futter from './Futter'

const Routelayots = () => {
  return (
   <>
   <Naver/>
   <Outlet/>
   <Futter/>
   
   </>
  )
}

export default Routelayots