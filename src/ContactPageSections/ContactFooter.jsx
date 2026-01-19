import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactFooter = () => {
    let icons = [
        { icon: <FaXTwitter />, name: 'Twitter', Link: 'https://twitter.com' },
        { icon: <FaInstagram />, name: 'Instagram', Link: 'https://instagram.com' },
        { icon: <SiWhatsapp />, name: 'Whatsapp', Link: 'https://wa.me/' },
        { icon: <FaYoutube />, name: 'Youtube', Link: 'https://youtube.com' },
        { icon: <FaGithub />, name: 'Github', Link: 'https://github.com' }
    ]
    return (

            <div className='bg-(--secondory-color) capitalize lg:p-30 lg:pb-0 bg-[url("https://inexa-html-demos.vercel.app/assets/imgs/background/pattern.png")]'>
                <p className='underline text-(--primery-color)'>have a nice work! let’s talk with me</p>
                <h2 className='text-7xl font-semibold font-dm-sans'>mkmayur4480@gmail.com</h2>
                <div className='flex bg-white mt-8 rounded-2xl overflow-hidden'>
                    {icons.map((item, index) => (
                        index == 0 ?
                            <div onClick={() => window.open(item.Link, "_blank")} className='flex justify-between w-full items-center px-4 py-2 hover:text-white duration-300 font-semibold hover:bg-(--primery-color)'>
                                <h4 className='text-lg '>{item.name}</h4>
                                {item.icon}
                            </div>
                            :
                            <div onClick={() => window.open(item.Link, "_blank")} className='flex justify-between w-full items-center px-4 py-2 border-l-2 border-gray-300 hover:text-white duration-300 font-semibold hover:bg-(--primery-color)'>
                                <h4 className='text-lg '>{item.name}</h4>
                                {item.icon}
                            </div>
                    ))}
                </div>
                <div className='flex justify-between text-center py-5 lg:text-base text-[4.2vw]'>
                    <h2 className='mt-2 lg:mt-0 text-(--primery-color) font-semibold cursor-pointer hover:text-black transform-all duration-300 inline-block'>Code by Mayur Kumawat</h2>
                    <p>&copy; {new Date().getFullYear()} <span className='text-black font-semibold cursor-pointer hover:text-(--primery-color) transform-all duration-300'>Mayurkumawat.me</span> | All rights reserved.</p>
                </div>

            </div>
    )
}

export default ContactFooter