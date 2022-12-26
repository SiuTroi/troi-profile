import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { useEffect } from 'react';

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/introduce")
  }, [])
  return (
    <div className='bg-[#85e4f7] flex justify-center px-[16%]'>
      <div>
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default App