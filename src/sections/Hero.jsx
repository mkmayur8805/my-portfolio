import { useGSAP } from '@gsap/react'
import mypic from '../assets/mk.jpeg'
import Para from '../Components/Para'
import { gsap } from 'gsap'
import { useRef } from 'react'
const Hero = () => {
  const mayurRef = useRef()
  const kumawatRef = useRef()
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(kumawatRef.current , {y:-500, opacity:0, duration:1, ease:"power4.out"})
    tl.from(mayurRef.current , {y:-500, opacity:0, duration:1, ease:"power4.out"})
    
  })
  return (
    <section id="Home" className="flex flex-col justify-end items-center mb-32 lg:px-30 px-8">
      <h3 ref={mayurRef} className="font-dm-sans text-black text-[22vw] lg:text-[15rem] font-semibold -mb-10 lg:-mb-32 lg:pt-[18vh] pt-[15vh]">Mayur</h3>
      <h3 ref={kumawatRef} className="font-dm-sans text-[22vw] lg:text-[15rem] font-normal text-(--primery-color) lg:-mb-12 italic">Kumawat</h3>
      <Para className="lg:w-3/4  lg:text-2xl text-center" text="I’m a frontend developer focused on building clean and responsive websites. I enjoy learning, experimenting, and turning ideas into real web experiences." />
      <div className='h-72 w-72 overflow-hidden bg-center bg-cover rounded-full mt-18'>
        <img className='h-full w-full hover:scale-105 transition-transform duration-300' src={mypic} alt="Mayur Kumawat" />
      </div>
    </section>
  )
}

export default Hero