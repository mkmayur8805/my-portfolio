import { useGSAP } from '@gsap/react'
import mypic from '../assets/mk.jpeg'
import Para from '../Components/Para'
import { gsap } from 'gsap'
import { useRef } from 'react'
import SEO from '../Components/SEO'
const Hero = () => {
  const mayurRef = useRef()
  const kumawatRef = useRef()
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(kumawatRef.current , {y:-500, opacity:0, duration:1, ease:"power4.out"})
    tl.from(mayurRef.current , {y:-500, opacity:0, duration:1, ease:"power4.out"})
    
  })
  return (
    <section id="hero" className="flex flex-col justify-end items-center mb-32 lg:px-30 px-8 cursor-default">
      <SEO keywords="frontend developer, clean websites, responsive design" description="I’m a frontend developer focused on building clean and responsive websites. I enjoy learning, experimenting, and turning ideas into real web experiences." />
      <div className='flex lg:hidden h-60 w-60 overflow-hidden bg-center bg-cover rounded-full mt-36'>
        <img className='h-full w-full hover:scale-105 transition-transform duration-300' src={mypic} alt="Mayur Kumawat" />
      </div>
      <h3 ref={mayurRef} className="font-dm-sans text-black text-[22vw] lg:text-[15rem] font-semibold -mb-10 lg:-mb-32 lg:mt-[32vh] ">Mayur</h3>
      <h3 ref={kumawatRef} className="font-dm-sans text-[22vw] lg:text-[15rem] font-normal text-(--primery-color) lg:-mb-12 italic">Kumawat</h3>
      <Para className="lg:w-3/4  lg:text-2xl text-center" text="I’m a frontend developer focused on building clean and responsive websites. I enjoy learning, experimenting, and turning ideas into real web experiences." />
      <div className='hidden lg:flex h-72 w-72 overflow-hidden bg-center bg-cover rounded-full mt-18'>
        <img className='h-full w-full hover:scale-105 transition-transform duration-300' src={mypic} alt="Mayur Kumawat" />
      </div>
    </section>
  )
}

export default Hero