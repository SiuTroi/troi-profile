import { GiGraduateCap } from "react-icons/gi";
import { ImBook } from "react-icons/im";

import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import Javascript from "../../assets/js.png"
import ReactJS from "../../assets/react.png"
import Bootstrap from "../../assets/bootstrap.png"
import Tailwind from "../../assets/tailwind.png"


const mySkills = [
  {
    name: "HTML",
    img: HTML,
    color: "#f24d11"
  }
  ,
  {
    name: "CSS",
    img: CSS,
    color: "#2011f2"
  }
  ,
  {
    name: "Javascript",
    img: Javascript,
    color: "#ffea00c4"
  }
  ,
  {
    name: "ReactJS",
    img: ReactJS,
    color: "#61dafb"
  }
  ,
  {
    name: "Bootstrap",
    img: Bootstrap,
    color: "#c58af9"
  }
  ,
  {
    name: "Tailwind",
    img: Tailwind,
    color: "#0ea5e9"
  }
]

const Education = ({time}) => {
  return (
    <div className="content">
      <h1 className='font-bold text-[28px] mb-4'>Học vấn</h1>

      <div className="flex flex-col gap-20">
        <div>
          <div className="flex gap-4 items-center mb-4">
            <GiGraduateCap className='text-[42px] text-[#db6266]' />
            <h2 className='font-semibold text-[22px]' style={time ? {color: "blue"} : {color: "orange"}}>Giáo dục</h2>
          </div>
          <div className="edu">
            <h6 className='font-semibold text-[18px] translate-y-[-10px] '>FPT Software Acadamy</h6>
            <p className='text-sm mt-[-10px]'>09/08/2022 - Chưa xong</p>
            <p className='mt-4'>Học viện đào tạo kỹ sư  Công nghệ thông tin trực thuộc FPT Software</p>
          </div>
        </div>

        <div>
          <div className="flex gap-4 items-center mb-4">
            <ImBook className='text-[42px] text-[#db6266]' />
            <h2 className='font-semibold text-[22px]' style={time ? {color: "blue"} : {color: "orange"}}>
              Kiến thức (Chuyên môn)
            </h2>
          </div>
          <div className='flex flex-wrap justify-between items-center gap-2 lg:justify-start lg:gap-10'>
            {mySkills.map(item => (
              <div key={item.name} className="w-[30%] flex flex-col items-center lg:w-[12%] " >
                <div className='p-6 bg-[#252525] rounded-full'>
                  <img src={item.img} alt={item.name} style={item.name === "Tailwind" ? {borderRadius: "50%"} : {}} 
                  className="hover:scale-110" />
                </div>
                <p className={`text-[${item.color}] text-sm`}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education