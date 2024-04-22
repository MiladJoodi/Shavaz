"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';


const Slider = () => {
    return (
        <>
      <Swiper 
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true}}
      modules={[Pagination,Autoplay]}
      className="mySwiper mt-6"
      autoplay={{ delay: 2000}}
      >
        <SwiperSlide>
            <Image
            src="/aH1VurMyxmAzejiRMWv8kPTY3rOG985YdFu8b2tP.webp"
            width={1500}
            height={500}
            alt='slider1'
            priority
            className='object-contain'
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            src="/Q2Aap9zRdRaoM8jHRuDooBqsFdgQLFdddwlkDVIl.webp"
            width={1500}
            height={500}
            alt='slider1'
            priority 
            className='object-contain'
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            src="/Vd8dzPKbkMYK8e5SXGadArtCS41FCVatWGgFRMD7.webp"
            width={1500}
            height={500}
            alt='slider1'
            priority 
            className='object-contain'
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            src="/slider1.jpg"
            width={1500}
            height={500}
            alt='slider1'
            priority
            className='w-full'
            />
        </SwiperSlide>
      </Swiper>
    </>
    );
}

export default Slider;