import Image from 'next/image'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter} from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../basketSlice'



type Props = {}

export default function Nav({}: Props) {
  const { data: session } = useSession()
  const router = useRouter();
  const items = useSelector(selectItems);
  
  return (
    <header>
        {/* TOP NAV  */}
        <div className='flex items-center justify-between px-1 py-2 space-x-1 bg-black'>
           <div className='flex items-center justify-start flex-grow px-2 cursor-pointer sm:flex-grow-0 hover:ring-1 hover:ring-white'>{/*logo */}
             <Image
              onClick={() => router.push('/')} 
              className='w-auto h-auto mt-3'
              src="https://links.papareact.com/f90"
              height={105}
              width={105}
              alt="logo"
              />
              <h4 className='text-white'>.in</h4>
            </div>
            <div className='cursor-pointer hidden lg:flex justify-center items-center text-left hover:ring-1 hover:ring-white h-[3rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="items-center w-6 h-6 ">
                 <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <div className='px-1'>
                  <p className='font-normal text-gray-300'>Hello</p>
                  <h3 className='-mt-2 font-bold text-white'>Select your address</h3>
                </div>
            </div>
            <div className='justify-end flex-grow hidden px-1 cursor-pointer sm:flex'>{/**search bar */}
              <div className='px-3 text-center bg-gray-100 rounded-l-md '>
                <h3 className='mt-2 text-black'>All</h3>
              </div>
              <input type="text" className="flex-grow py-2"height={"100%"}/>{/*input*/}
              <div className='px-3 bg-[#FF9900] items-center justify-center rounded-r-md'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 mt-1 w-7">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
               </svg>
              </div>
            </div>
            <div 
              onClick={() => {!session? signIn(): signOut()}}
              className='items-center justify-center px-2 text-white cursor-pointer hover:ring-1 hover:ring-white '>
               <p className='font-normal '>{!session ?   "sign in" : `Hello ${session.user.name}`}</p>
               <h3 className='-mt-1 font-bold'>Account & Lists</h3>
            </div>
            <div className='items-center justify-center hidden px-2 text-white cursor-pointer md:inline hover:ring-1 hover:ring-white '>
               <p className='font-normal '>Returns</p>
               <h3 className='-mt-1 font-bold'>& Orders</h3>
            </div>
            <div className='relative items-center justify-center px-2 cursor-pointer hover:ring-1 hover:ring-white'
                onClick={() => router.push('/checkout')} 
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className='absolute right-1 bottom-[1.3rem] rounded-full font-extrabold text-[#FF9900]'>{items.length}</div>
            </div>
        </div>
        {/* BOTTOM NAV */}
        <div className='flex px-3 py-2 bg-gray-800 sm:hidden '>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="items-center justify-center w-8 h-8 mt-1 mr-2">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
               </svg>
              <div className='px-3 text-center bg-gray-100 rounded-l-md'>
                <h3 className='mt-2 text-black'>All</h3>
              </div>
              <input type="text" className="flex-grow py-2"height={"100%"}/>
              <div className='px-3 bg-[#FF9900] items-center justify-center rounded-r-md'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 mt-1 w-7">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
               </svg>
              </div>
        </div>
        <div className='items-center hidden px-1 py-1 bg-gray-800 sm:flex'>
          <div className='flex items-center justify-center px-2 py-1 xl:px-4 hover:ring-white hover:ring-1'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="items-center justify-center w-8 h-8 mt-1 mr-2">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            <h3 className='text-white'>All</h3>
          </div>
          <div  className='justify-center px-2 py-1 xl:px-4 hover:ring-white hover:ring-1'>
            <h3 className='text-white'>Sell</h3>
          </div>
          <div className='justify-center px-2 py-1 xl:px-4 hover:ring-white hover:ring-1'>
            <h3 className='text-white'>Best Sellers</h3>
          </div>
          <div className='justify-center px-2 py-1 xl:px-4 hover:ring-white hover:ring-1'>
            <h3 className='text-white'>Mobile</h3>
          </div>
          <div className='justify-center px-2 py-1 hover:ring-white hover:ring-1'>
            <h3 className='text-white'>Today's Deal</h3>
          </div>
          <div className='justify-center px-2 py-1 xl:px-4 hover:ring-white hover:ring-1'>
            <h3 className='text-white'>Customer Service</h3>
          </div>
          <div className='justify-center hidden px-2 py-1 xl:px-4 lg:flex hover:ring-white hover:ring-1'>
            <h3 className='text-white'>Electronics</h3>
          </div>
          <div className='xl:px-4 px-2 py-1 hidden md:flex 
           tracking-[0.8rem] font-normal justify-center flex-grow hover:ring-white hover:ring-1'>
            <h2 className='text-white'>Join Prime</h2>
          </div>
        </div>
    </header>
  )
}