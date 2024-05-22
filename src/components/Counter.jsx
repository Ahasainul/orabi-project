import React from 'react'
import Container from './Container'
import { useSelector ,useDispatch} from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'


const Counter = () => {
   const countervalu =  useSelector ((state)=>state.counter.value)
   const dispatch = useDispatch()

   
   const handelclick =() =>{
  dispatch(increment(1))
   }
   const dawon =() =>{
  dispatch(decrement())
   }
  return (
   <>
   <Container className={'flex justify-center py-28'}>
 
<button className='p-5 bg-black text-white mr-6' onClick={handelclick}>+</button>
 <h1 className='text-5xl'> {countervalu}</h1>
<button className='p-5 bg-black text-white ml-6' onClick={dawon}>-</button>
   </Container>
   </>
  )
}

export default Counter