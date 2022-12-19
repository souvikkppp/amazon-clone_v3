import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='relative'>
        <div  className='absolute w-full bottom-0 h-[10rem]
          bg-gradient-to-t from-gray-100 to-transparent z-10'/>
        <Carousel
         infiniteLoop
         autoPlay
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={2000}
        >
            <div>
                <img
                  className='' src="/banner1.jpg" alt=""/>
            </div>
            <div>
                <img
                  className='' src="/banner2.jpg" alt=""/>
            </div>
            <div>
                <img
                  className='' src="/banner3.jpg" alt=""/>
            </div>
        </Carousel>
    </div>
  )
}