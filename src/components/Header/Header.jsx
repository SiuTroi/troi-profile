import React from "react";
import image from "../../assets/siu-troi.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const socials = [
  {
    name: "Facebook",
    icon: <BsFacebook fontSize={20} color="#0c91d4" />,
    link: "https://www.facebook.com/siutroi862004",
  },
  {
    name: "Instagram",
    icon: <FaInstagram fontSize={20} color="#eb6d82" />,
    link: "https://www.instagram.com/nmt_t_s_io/",
  },
  {
    name: "Linkedin",
    icon: <AiFillLinkedin fontSize={20} color="#0000ff" />,
    link: "https://www.linkedin.com/in/siu-tr%C3%B4i-532b96248/",
  },
  {
    name: "Github",
    icon: <AiFillGithub fontSize={20} color="#000" />,
    link: "https://github.com/SiuTroi",
  },
];

const Header = () => {
  return (
    <div>
      <div className="max-w-[990px] rounded-2xl bg-[#c3ebf8] mt-12 py-8 px-10 lg:flex lg:justify-between lg:items-center lg:w-[990px] lg:gap-4">
        <div className="lg:flex-1 lg:border-r lg:border-black">
          <h1 className="text-center lg:text-left text-3xl pb-2">Siu Trôi</h1>
          <div className="w-[80px] h-[80px] object-cover mx-auto lg:mx-0 "><img
            src={image}
            alt="Siu Trôi"
            className="w-full h-full rounded-full mx-auto my-0 lg:mx-0"
          /></div>
          
          <div className="social-heading-info">
            <div className="flex justify-center lg:justify-start items-center gap-4 mt-3">
              <GiGraduateCap fontSize={28} />
              <div className="text-left font-medium">
                Học viên FPT <br /> Software Academy
              </div>
            </div>
            <ul className="flex justify-center items-center gap-4 my-4 lg:justify-start">
              {socials.map((item, index) => (
                <li key={index}
                  className={`w-[44px] h-[44px] rounded-full shadow-2xl 
                    flex justify-center items-center social-shadow hover:opacity-50`}
                >
                  <a href={item.link}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6  lg:flex-1">
          <div className="flex justify-between items-center gap-8">
            <div>
              <h6 className="text-[#9b9b9b] mb-1 font-semibold uppercase text-[15px] ">Email</h6>
              <p className="text-sm">siutroi004@gmail.com</p>
            </div>

            <div>
              <h6 className="text-[#9b9b9b] mb-1 font-semibold uppercase text-[15px] ">Ngày sinh</h6>
              <p className="text-sm">08/06/2004</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h6 className="text-[#9b9b9b] mb-1 font-semibold uppercase text-[15px] ">
                Số điện thoại
              </h6>
              <p className="text-sm">0333514122</p>
            </div>

            <div>
              <h6 className="text-[#9b9b9b] mb-1 font-semibold uppercase text-[15px] ">Quê Quán</h6>
              <p className="text-sm">Gia Lai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
