import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Introduce from './Introduce'
import Education from './Education'
import Target from './Target'
import Projects from './Projects'
import Navbar from './Navbar'

const Content = () => {
  
  const [time, setTime] = useState(false);

  useEffect(() => {
    const timeer = setInterval(() => {
      setTime(!time)
    }, 4000)
    return () => {
      clearInterval(timeer)
    }
  }, [time])
  return (
    <div className='mt-[140px] bg-[#c3ebf8] rounded-3xl py-8 px-10 mb-72 lg:w-[990px] 
    lg:flex lg:bg-transparent lg:gap-8 lg:p-0'>
    <Navbar />
    <div className='lg:flex-1'>
      <Routes>
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/education' element={<Education time={time} />} />
        <Route path='/target' element={<Target time={time} />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
    </div>
  )
}

export default Content