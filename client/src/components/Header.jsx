import React from 'react'
import Lottie from "lottie-react";
import anim1 from "../assets/animation_ll9piu1t.json";

const Header = () => {
  return (
    <div className='text-white bg-gray-700'>
      <div className='flex items-center justify-between px-5 py-4  tracking-wider'>
          <div>
          <h1 className='text-2xl font-bold'>Where in the world?</h1>
          </div>
          <div className='flex items-center gap-x-10 w-20'>
          <Lottie animationData={anim1} />
          </div>
      </div>
    </div>
  )
}

export default Header