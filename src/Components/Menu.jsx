import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
const Menu = ({ menu }) => {
  return (
    <div className='fixed flex justify-end top-0 z-50 left-0 lg:hidden h-screen w-screen bg-black/50'>
      <div className=' h-screen w-[85vw] bg-white'>
        <div className='flex px-4 py-8 justify-between'>
          <div className='flex items-center justify-center gap-2 '>
            <IoLogoReact className='text-6xl text-(--primery-color)' />
            <h5 className='leading-7 text-2xl font-semibold'>Mayur <br /> Kumawat</h5>
          </div>
          <IoClose className='text-3xl cursor-pointer' />
        </div>
        <ul>
          {menu.map((e, idx) => (
            <li key={idx} className='border-b px-4 py-4 text-xl border-zinc-400 active:text-(--primery-color)'>{e.item}</li>
          ))}
        </ul>
        <div>
          <h4 className='text-black font-semibold text-xl px-4 mt-6'>Get in touch</h4>
          <div className='flex gap-2 items-center px-4 mt-4'>
            <IoMail className='text-(--primery-color) text-2xl' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>mkmayur4480@gmail.com</p>
          </div>
          <div className='flex gap-2 items-center px-4 mt-4'>
            <IoCall className='text-(--primery-color) text-2xl' />
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'>+91 7448046577</p>
          </div>
        </div>
        <div className='flex gap-4 p-4 text-2xl mt-6'>
          <FaXTwitter className="hover:text-(--primery-color) transform-all duration-300" />
          <FaInstagram className="hover:text-(--primery-color) transform-all duration-300" />
          <FaGithub className="hover:text-(--primery-color) transform-all duration-300" />
          <SiWhatsapp className="hover:text-(--primery-color) transform-all duration-300" />
          <FaYoutube className="hover:text-(--primery-color) transform-all duration-300" />
        </div>
      </div>
    </div>
  )
}

export default Menu