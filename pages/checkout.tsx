import React from 'react'
import Nav from '../components/Nav'
import { signIn, signOut, useSession } from "next-auth/react"
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../basketSlice';
import CheckOutProduct from '../components/CheckOutProduct';




export default function CheckOut() {

  const { data: session } = useSession()
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal)
  
  return (
    <div className='bg-gray-100 '>
        <Nav />
        <main>
            {!session?  (
              <div>
                <div className='flex items-center justify-start p-10 m-10 space-x-4 overflow-hidden bg-white md:space-x-10'>
                  <img src="/checkout.svg" className='h-[7rem] w-[7rem]  sm:w-[15rem] sm:h-[15rem]'   alt=""/>
                 <div className=''>
                  <h1 className='font-bold md:text-[2rem] mb-1'>Your Amazon Cart is empty</h1>
                  <p className='text-[#007185] hover:text-red-600 cursor-pointer hover:underline hover'>Shop today's deals</p>
                  <button 
                   className='px-10 py-2 mt-4 button'
                   onClick={() => signIn()}>Sign in to your account</button>
                 </div>
                </div>
                <div className=' h-[5rem] bg-white mx-10' />
              </div>
            ): (
              <div>
                <div className='flex items-center justify-start p-10 m-10 space-x-4 overflow-hidden bg-white md:space-x-10'>
                  <img src="/checkout.svg" className='h-[7rem] w-[7rem]  sm:w-[15rem] sm:h-[15rem]'   alt=""/>
                 <div className=''>
                  <h1 className='font-bold md:text-[2rem] mb-1'>
                    {items.length === 0? "Your Amazon Cart is empty": "Shoping Basket"}
                  </h1>
                  <p className='text-[#007185] hover:text-red-600 cursor-pointer hover:underline hover'>Shop today's deals</p>

                 </div>
                </div>
                <div className=''>
                  {items.map((item: any, i:any) => (
                    <CheckOutProduct 
                      key={i}
                      id={item.id}
                      category={item.category}
                      image={item.image}
                      price={item.price}/>
                  ))} 
                </div>
                {items.length !== 0 && (
                  <div className='m-5 flex flex-col bg-white p-5'>
                    <h1>your order total is ₹{Math.floor(total)}</h1>
                    <button className='button mt-5'>Buy now</button>
                  </div>
                )}
                
              </div>
            )}
        </main>
    </div>
  )
}