import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
const Hero = ({ heading, bgtext }) => {
  return (
    <div id='hero' className=' relative bg-(--secondory-color) lg:h-screen h-[70vh] p-4 w-full pt-16 flex items-center justify-center'>
        <h2 className='absolute top-1/2 opacity-50 left-0 transform -translate-y-1/2 uppercase text-mk text-[20rem] font-semibold'>{bgtext}{bgtext}</h2>
        <h2 className='capitalize lg:text-5xl text-[15vw] text-center font-semibold font-dm-sans'>{heading}</h2>
        <div className="absolute uppercase bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white flex gap-2 items-center px-3 py-1 rounded-md shadow-md border border-(--primery-color)/50">
            <Link to='/'>
            <h5 className='hover:text-(--primery-color) duration-300 hover:underline'>home</h5>
            </Link>
            <MdArrowForwardIos />
            <h5>{bgtext}</h5>
        </div>
    </div>
  )
}

export default Hero