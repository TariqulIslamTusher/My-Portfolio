import React from 'react';
import './Banner.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import myImg from '../../../assets/MyImg/myImgBgless.jpg'
import { FaArrowDown } from 'react-icons/fa';



const Banner = () => {
    return (
        <div id='banner' className='bg-[url(https://e0.pxfuel.com/wallpapers/295/172/desktop-wallpaper-%C8%9A-light-blue-design-background-blue-banner.jpg)] bg-cover w-full lg:flex items-center mx-auto justify-around'>
            <div className='lg:static absolute !lg:w-8/12 md:left-10 md:top-1/3 leading-4'>
                <h1 className="text-4xl font-bold text-black">Hi!</h1>
                <h1 className="text-4xl font-bold text-black">I m Tariqul</h1>
                <h2 className="text-2xl text-yellow-700">MERN Stack web developer</h2>

                <a href="#aboutMe">
                    <FaArrowDown className='text-4xl relative text-center right-0 bottom-0 animate-bounce'></FaArrowDown>
                </a>


            </div>
            <img className='' src={myImg} alt="" />
        </div>
    );
};

export default Banner;