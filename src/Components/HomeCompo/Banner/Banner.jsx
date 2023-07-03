import React from 'react';
import './Banner.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import myImg from '../../../assets/MyImg/myImgBgless.jpg'



const Banner = () => {
    return (
        <div id='banner' className='bg-slate-300 w-full lg:flex items-center mx-auto justify-around'>
            <div className='lg:static absolute !lg:w-8/12 left-10 top-1/3 inset-75'>
                <h1 className="text-4xl">Hi, I m Tariqul</h1>
                <h2 className="text-2xl text-yellow-700">MERN Stack web developer</h2>
            </div>
            <img className='' src={myImg} alt="" />
        </div>
    );
};

export default Banner;