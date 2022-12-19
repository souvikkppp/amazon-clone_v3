import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
// import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from "../basketSlice"
import { useRouter } from 'next/router';

export default function Cards({id,title,image,description,price,category}: any) {
  const dispatch = useDispatch()
  const router = useRouter()
  const addItemsToBusket = () => {
    const product = {
      id,title,image,description,price,category
    }
    dispatch(addToBasket(product))//sending the product as an action to the redux store
  }
  
  const [rating, set] = useState(5);
  const [hasPrime, setH] = useState(Math.random() < 1)
 
  useEffect(() => {
    set(Math.floor(Math.random() * 5) + 1 );
   }, [])

   useEffect(() => {
    setH(Math.random() < 0.5 );
   }, [])

  return (
    <div className="relative z-30 flex flex-col p-10 m-5 bg-white ">
        <p className='absolute text-xs italic right-2 top-2'>{category}</p>
        <Image 
         onClick={() => router.push(`/productPage/${id}`)}
         className='w-auto h-auto mx-auto' src={image} height={200} width={200} alt=""/>

        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
          {Array(rating).fill(rating).map((_, i) => (
            <StarIcon key={i} className='h-6 text-yellow-500'/>
          ))}
        </div> 
       
        <p className='my-2 text-xs line-clamp-2 '>{description}</p>

        <div>
          {/* <Currency quantity={props.price} currency="INR"/> */}
          <p className='mb-5'>₹{price}</p>
        </div>

        {hasPrime && (
          <div className='flex items-center -mt-5 space-x-2'>
            <img 
             className='w-12'
            src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-500'>Free Next-Day Delivary</p>
          </div>
        )}

        <button onClick={addItemsToBusket} className='mt-auto button'>Add to Busket</button>

    </div>
  )
}



 