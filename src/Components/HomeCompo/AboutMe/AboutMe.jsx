import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import myImg from '../../../assets/MyImg/IMG20211008165040-01.jpeg'
import SectionTitle from '../../Hooks/SectionTitle';

const AboutMe = () => {
    return (
        <div id='aboutMe' className='m-10'>
            <SectionTitle heading={"About Me"} subHeading={'Who I am?'}></SectionTitle>

            {/* intro part */}
            <div>
                {/* <h1 className='text-3xl text-blue-500 my-5'>FRONT END WEB DEVELOPER</h1> */}
                <p className='text-slate-500'>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar
                </p>
            </div>


            <div className='md:flex gap-5 items-center justify-center'>
                <div className='w-full md:w-fit'>
                    <img className='h-[150px] rounded-full' src={myImg} alt="" />
                </div>
                <div className='w-full md:w-fit'>
                    <h2 className='border-b-2 border-pink-900 text-2xl inline-block py-2  text-blue-500'>Personal Informations</h2>
                    <ul>
                        <li>Name: Md Tariqul Islam</li>
                        <li>Email: islamtariqul652@gmail.com</li>
                        <li>Address: Burichang, Cumilla, Bangladesh. </li>
                        <li>Mobile: +880 1621845244</li>
                        <div>
                            <ul className='flex gap-5'>
                                <li><FaFacebook></FaFacebook> </li>
                                <li><FaLinkedin></FaLinkedin> </li>
                                <li><FaGithub></FaGithub> </li>
                            </ul>
                        </div>
                    </ul>
                </div>

            </div>

            {/* information section */}
            <div className='bg-yellow-600 m-5 p-7'>
                <p>I am happy to know you that 300+ projects done sucessfully!</p>
                <button className='btn btn-ghost btn-outline'>Hire Me</button>

            </div>
        </div>
    );
};

export default AboutMe;