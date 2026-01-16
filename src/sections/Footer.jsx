import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
const Footer = ({ menu }) => {
  return (
    <footer className='bg-[#222222]  text-[#656565] pt-30'>
      <div className="flex p-8 lg:px-30">
        <div className="text-[9vw] lg:text-9xl font-semibold text-white leading-none font-dm-sans">
          <h2>Let's have a</h2>
          <h2 className="italic text-(--primery-color)">conversation</h2>
        </div>
        <div className="flex items-center justify-center">
            <img className="w-[10vw] lg:h-5 lg:mt-24 mx-5" src="https://inexa-html-demos.vercel.app/assets/imgs/icon/line.png" alt="" />
            <div className=" flex items-center justify-center text-black rounded-full font-semibold bg-white hover:text-(--primery-color) hover:scale-105 shadow-white transition-all p-2 h-15 w-15 text-center lg:h-30 lg:w-30 duration-300 hover:-translate-y-2 cursor-pointer">
              <h5 className="text-sm lg:text-base">Let's Talk</h5>
            </div>
        </div>
      </div>
      <div className=' flex lg:flex-row flex-col gap-12 lg:gap-30 p-8 lg:px-30 py-20'>
        <div>
          <div className="flex items-center justify-start gap-2 text-3xl font-dm-sans cursor-pointer">
            <IoLogoReact className="text-6xl text-(--primery-color)" />
            <h2 className="font-medium text-white">Mayur <br /> Kumawat</h2>
          </div>
          <p className='w-80 mt-4'>Building clean, modern web interfaces with a strong focus on performance, responsiveness, and usability. Passionate about creating reliable digital experiences that balance design precision with scalable, production-ready development.
          </p>
          <div className='flex gap-4 mt-6'>
            <FaXTwitter className="hover:text-(--primery-color) transform-all duration-300" />
            <FaInstagram className="hover:text-(--primery-color) transform-all duration-300" />
            <SiWhatsapp className="hover:text-(--primery-color) transform-all duration-300" />
            <FaYoutube className="hover:text-(--primery-color) transform-all duration-300" />
          </div>
        </div>
        <div>
          <h4 className='text-white font-semibold text-xl'>Get in touch</h4>
          <div className='flex gap-2 items-center mt-4'>
            <IoMail className='text-white' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>mkmayur4480@gmail.com</p>
          </div>
          <div className='flex gap-2 items-center mt-4'>
            <IoCall className='text-white' />
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'>+91 7448046577</p>
          </div>
          <div className='flex gap-2 items-center mt-4'>
            <FaLocationDot className='text-white' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>nashik, mh, India-423301</p>
          </div>
        </div>
        <div>
          <h4 className='text-white font-semibold text-xl'>Essectial</h4>
          {menu.map((e, index) => (<div key={index} className='flex gap-2 items-center mt-4'>
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'>{e.item}</p>
          </div>))}
        </div>
      </div>
      <div className='bg-[#212529] text-center p-4'>
        <p>&copy; {new Date().getFullYear()} <span className='text-white font-semibold cursor-pointer hover:text-(--primery-color) transform-all duration-300'>Mayurkumawat.me</span> | All rights reserved.</p>
        <h2 className='text-(--primery-color) font-semibold cursor-pointer hover:text-white transform-all duration-300 inline-block'>Code by Mayur Kumawat</h2>
      </div>
    </footer>
  )
}

export default Footer