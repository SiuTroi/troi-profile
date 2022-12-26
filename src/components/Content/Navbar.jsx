import React from 'react';
import {FaUserGraduate} from "react-icons/fa";
import {ImBook} from "react-icons/im";
import {GiTargetShot} from "react-icons/gi";
import {SiPolymerproject} from "react-icons/si"
import { NavLink } from 'react-router-dom';


const navBars = [
    {
        title: "Giới thiệu",
        icon: <FaUserGraduate size={24} />,
        route: "/introduce"
    },
    {
        title: "Học vấn",
        icon: <ImBook size={24} />,
        route: "/education"
    },
    {
        title: "Mục tiêu",
        icon: <GiTargetShot size={24} />,
        route: "/target"
    },
    {
        title: "Dự án",
        icon: <SiPolymerproject size={24} />,
        route: "projects"
    },
]
const Navbar = () => {
  return (
    <div className='fixed z-50 w-full left-0 bottom-0 lg:relative lg:w-1/6'> 
        <div className='flex justify-between p-4 bg-[#a2b8e7b3] rounded-3xl lg:flex-col 
        gap-1 sm:gap-4 lg:bg-[#c3ebf8] lg:pt-8 lg:pb-36'>
            {navBars.map(item => (
                <NavLink to={item.route} key={item.title} className="flex flex-col justify-center items-center gap-2 min-w-[20%] p-2 bg-white rounded-3xl nav">
                    {item.icon}
                    <h3 className='text-base text-center'>{item.title}</h3>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Navbar