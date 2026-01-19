import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
const Hero = ({title}) => {
  return (
    <div id='hero' className=' relative bg-(--secondory-color) lg:h-screen h-[70vh] p-4 w-full pt-16 flex items-center justify-center'>
            <h2 className='absolute top-1/2 opacity-50 left-0 transform -translate-y-1/2 uppercase text-mk text-[20rem] font-semibold'>project</h2>
            <h2 className='capitalize leading-tight lg:text-5xl text-[15vw] text-center font-semibold font-dm-sans'>{title}</h2>
            <div className="absolute lg:text-base text-sm text-nowrap uppercase bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white flex gap-2 items-center px-3 py-1 rounded-md shadow-md border border-(--primery-color)/50">
                <h5>home</h5>
                <MdArrowForwardIos />
                <h5>portfolio</h5>
                <MdArrowForwardIos />
                <h5>{title}</h5>

            </div>
        </div>
  )
}

export default Hero