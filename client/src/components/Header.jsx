import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='text-white bg-gray-700'>
      <div className='flex items-center justify-between px-5 py-6  tracking-wider'>
          <div>
          <h1 className='text-2xl font-bold'>Where in the world?</h1>
          </div>
         <div className='flex items-center gap-x-5'>
          <span> <BsFillMoonStarsFill/> </span>
          <span>Darkmode</span>
         </div>
      </div>
    </div>
  )
}

export default Header