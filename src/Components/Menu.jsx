import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { IoLogoReact, IoClose, IoCall, IoMail } from "react-icons/io5";
import { useGSAP } from '@gsap/react';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../redux/MenuSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import SocialData from '../data/socialdata';

const Menu = () => {
  const menuState = useSelector(state => state.MenuSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const tl = useRef(null);
  const itemsRef = useRef([]);
  const iconsRef = useRef([]);
  const h4Ref = useRef(null);
  const mailRef = useRef(null);
  const callRef = useRef(null);
  const closeRef = useRef(null);
  const logoRef = useRef(null);
  const bgRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true, defaults: { ease: "power2.out", duration: 0.3 } });
    tl.current.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.15 });
    tl.current.fromTo(menuRef.current, { right: "-100%" }, { right: 0, duration: 0.25 }, "<");
    tl.current.from(logoRef.current, { y: -40, opacity: 0 }, "-=0.1");
    tl.current.from(itemsRef.current, { x: 40, opacity: 0, stagger: 0.05 }, "-=0.15");
    tl.current.from(h4Ref.current, { x: 30, opacity: 0 }, "-=0.1");
    tl.current.from([mailRef.current, callRef.current], { opacity: 0, duration: 0.2, stagger: 0.05 }, "-=0.1");
    tl.current.from(iconsRef.current, { y: 30, opacity: 0, stagger: 0.05, color: "var(--primery-color)", duration: 0.25 }, "-=0.1");
    tl.current.from(closeRef.current, { scale: 0, rotate: 90, duration: 0.25 }, "-=0.2");
  }, []);

  useEffect(() => {
    if (menuState.isOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "auto";
    }
  }, [menuState.isOpen]);

  const handleClick = (item) => {
    dispatch(closeMenu());
    if (item.type === "route") navigate(item.path);
    if (item.type === "section") {
      if (location.pathname !== "/") navigate(`/?scrollTo=${item.target}`);
      else document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div style={{ pointerEvents: menuState.isOpen ? "auto" : "none" }} ref={bgRef} className='fixed flex justify-end top-0 z-50 left-0 h-screen w-screen bg-black/50'>
      <div ref={menuRef} className='fixed -right-full duration-100 overflow-y-auto h-screen w-[85vw] bg-white'>
        <div className='flex px-4 py-8 justify-between'>
          <div ref={logoRef} className='flex items-center justify-center gap-2'>
            <IoLogoReact className='text-6xl text-(--primery-color)' />
            <h5 className='leading-7 text-2xl font-semibold'>Mayur <br /> Kumawat</h5>
          </div>
          <div onClick={() => dispatch(closeMenu())} ref={closeRef} className='h-fit'>
            <IoClose className='text-3xl cursor-pointer' />
          </div>
        </div>
        <ul>
          {menuState.MenuItems.map((e, idx) => (
            <li key={idx} ref={el => itemsRef.current[idx] = el} onClick={() => handleClick(e)} className='border-b px-4 py-3 text-xl border-zinc-400 cursor-pointer hover:text-(--primery-color)'>
              {e.item}
            </li>
          ))}
        </ul>
        <div>
          <h4 ref={h4Ref} className='text-black font-semibold text-xl px-4 mt-6'>Get in touch</h4>
          <div ref={mailRef} className='flex gap-2 items-center px-4 mt-4'>
            <IoMail className='text-(--primery-color) text-2xl' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase duration-300'>mkmayur4480@gmail.com</p>
          </div>
          <div ref={callRef} className='flex gap-2 items-center px-4 mt-4'>
            <IoCall className='text-(--primery-color) text-2xl' />
            <p className='cursor-pointer hover:text-(--primery-color) duration-300'>+91 7448046577</p>
          </div>
        </div>
        <div className='flex gap-4 p-4 text-[4.5vw] mt-6'>
          {SocialData.map((item, i) => (
            <span onClick={() => window.open(item.url, "_blank")} key={i} ref={el => iconsRef.current[i] = el}>
              <item.icon className="active:text-(--primery-color)" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu;
