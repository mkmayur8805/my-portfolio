import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { IoLogoReact } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../redux/MenuSlice';
import { Link } from 'react-router-dom';

const Menu = () => {
  let menu = useSelector((state) => state.MenuSlice)
  let dispatch = useDispatch();
  const tl = useRef(null);
  let itemsRef = useRef([])
  let iconsRef = useRef([])
  let h4Ref = useRef(null)
  let mailRef = useRef(null)
  let callRef = useRef(null)
  let closeRef = useRef(null)
  let logoRef = useRef(null)
  let bgRef = useRef(null)
  let menuRef = useRef(null)
  useGSAP(() => {
tl.current = gsap.timeline({
  paused: true,
  defaults: { ease: "power2.out", duration: 0.3 }
});

tl.current.fromTo(
  bgRef.current,
  { opacity: 0 },
  { opacity: 1, duration: 0.15 }
);

tl.current.fromTo(
  menuRef.current,
  { right: "-100%" },
  { right: 0, duration: 0.25 },
  "<"
);

tl.current.from(
  logoRef.current,
  { y: -40, opacity: 0 },
  "-=0.1"
);

tl.current.from(
  itemsRef.current,
  { x: 40, opacity: 0, stagger: 0.05 },
  "-=0.15"
);

tl.current.from(
  h4Ref.current,
  { x: 30, opacity: 0 },
  "-=0.1"
);

tl.current.from(
  [mailRef.current, callRef.current],
  { opacity: 0, duration: 0.2, stagger: 0.05 },
  "-=0.1"
);

tl.current.from(
  iconsRef.current,
  {
    y: 30,
    opacity: 0,
    stagger: 0.05,
    color: "var(--primery-color)",
    duration: 0.25
  },
  "-=0.1"
);

tl.current.from(
  closeRef.current,
  { scale: 0, rotate: 90, duration: 0.25 },
  "-=0.2"
);

    
  }, [])
  useEffect(()=>{
    if(menu.isOpen){
      tl.current.play();
      window.document.body.style.overflow = "hidden";
    } else{
      tl.current.reverse();
      window.document.body.style.overflow = "auto";
    }
  },[menu.isOpen])
  return (
    <div style={{pointerEvents: menu.isOpen ? "auto" : "none"}} ref={bgRef} className=' fixed flex justify-end top-0 z-50 left-0  h-screen w-screen bg-black/50'>
      <div ref={menuRef} className='fixed -right-[100%] duration-100 overflow-y-auto h-screen w-[85vw] bg-white'>
        <div className='flex px-4 py-8 justify-between'>
          <div ref={logoRef} className='flex items-center justify-center gap-2 '>
            <IoLogoReact className='text-6xl text-(--primery-color)' />
            <h5 className='leading-7 text-2xl font-semibold'>Mayur <br /> Kumawat</h5>
          </div>
          <div  onClick={() => dispatch(closeMenu())} className='h-fit' ref={closeRef} ><IoClose className='text-3xl cursor-pointer' /></div>
        </div>
        <ul>
          {menu.MenuItems.map((e, idx) => (
            <li onClick={() => dispatch(closeMenu())} ref={(el) => itemsRef.current[idx] = el} key={idx} className='item border-b px-4 py-3 text-xl border-zinc-400 active:text-(--primery-color)'><Link to={e.link}>{e.item}</Link></li>
          ))}
        </ul>
        <div>
          <h4 ref={h4Ref} className='text-black font-semibold text-xl px-4 mt-6'>Get in touch</h4>
          <div ref={mailRef} className='flex gap-2 items-center px-4 mt-4'>
            <IoMail className='text-(--primery-color) text-2xl' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>mkmayur4480@gmail.com</p>
          </div>
          <div ref={callRef} className='flex gap-2 items-center px-4 mt-4'>
            <IoCall className='text-(--primery-color) text-2xl' />
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'>+91 7448046577</p>
          </div>
        </div>
        <div className='flex gap-4 p-4 text-2xl mt-6'>
          <span ref={(el) => iconsRef.current[0] = el} ><FaXTwitter  className="hover:text-(--primery-color) transform-all duration-300" /></span>
          <span ref={(el) => iconsRef.current[1] = el} ><FaInstagram className="hover:text-(--primery-color) transform-all duration-300" /></span>
          <span ref={(el) => iconsRef.current[2] = el} ><FaGithub className="hover:text-(--primery-color) transform-all duration-300" /></span>
          <span ref={(el) => iconsRef.current[3] = el} ><SiWhatsapp className="hover:text-(--primery-color) transform-all duration-300" /></span>
          <span ref={(el) => iconsRef.current[4] = el} ><FaYoutube className="hover:text-(--primery-color) transform-all duration-300" /></span>
        </div>
      </div>
    </div>
  )
}

export default Menu