import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket } from '../basketSlice'

export default function CheckOutProduct({ id,title,image,description,price,category }: any) {
  const dispatch = useDispatch()
  const removeItemFromBusket = () => {
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className='relative flex flex-col bg-white p-5 m-5 '>
       <p className='absolute right-2 top-2'>{category}</p>
       <Image className='w-auto h-auto mx-auto' src={image} height={200} width={200} alt=""/>
       <p>₹{price}</p>
       <button onClick={removeItemFromBusket} className='button mt-5'>Remove from basket</button>
    </div>
  )
}