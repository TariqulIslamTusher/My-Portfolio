import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import { FaBars } from "react-icons/fa";
import myImg from "../assets/MyImg/IMG20211008165040-01.jpeg"


const MainOutlet = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  w-full">
                {/* Page content here */}
                <div className='relative'>
                    <label htmlFor="my-drawer-2" className="lg:hidden z-10 absolute left-5 top-5"><FaBars></FaBars></label>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
            
            <div className="drawer-side z-10 lg:bg-green-300 ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/2 lg:w-60 ">
                    {/* Sidebar content here */}
                    <ul>
                        <img className='w-3/4 mx-auto h-auto rounded-full' src={myImg} alt="not supported" />
                        <li>Md Tariqul Islam Tusher</li>
                        <li className='text-blue-800'>MERN Stack Web Developer</li>
                    </ul>
                    <li><a href='#banner'>Home</a></li>
                    <li><a href='#aboutMe'>About</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Contacts</a></li>
                </ul>

            </div>
        </div>

    );
};

export default MainOutlet;