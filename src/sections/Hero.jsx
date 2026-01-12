import mypic from '../assets/mk.jpeg'
import Para from '../Components/Para'
const Hero = () => {
  return (
    <section id="Home" className="h-[170vh] flex flex-col justify-end items-center mb-32">
      <h3 className="font-dm-sans text-black text-[15rem] font-bold">Mayur</h3>
      <h3 className="font-dm-sans text-[15rem] -mt-32 font-normal text-(--primery-color) -mb-12">Kumawat</h3>
      <Para className="w-3/4 text-2xl text-center" text="I’m a frontend developer focused on building clean and responsive websites. I enjoy learning, experimenting, and turning ideas into real web experiences." />
      <div className='h-72 w-72 overflow-hidden bg-center bg-cover rounded-full mt-18'>
        <img className='h-full w-full hover:scale-105 transition-transform duration-300' src={mypic} alt="Mayur Kumawat" />
      </div>
    </section>
  )
}

export default Hero