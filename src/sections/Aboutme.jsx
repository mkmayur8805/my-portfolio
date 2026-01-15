import SectionTag from '../Components/SectionTag'
const Aboutme = () => {
  return (
    <section className='p-30'>
      <div className='flex'>
        <div>
          <div className='h-140 w-120 overflow-hidden bg-center bg-cover rounded-sm'>
            <img className='h-full w-full hover:scale-105 transition-transform duration-300' src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-1.png" alt="" />
          </div>
        </div>
        <div className='pl-28'>
          <SectionTag tag="About me" />
          <h3 className='text-5xl text-black font-semibold font-dm-sans mt-5 capitalize leading-14'>
            creative frontend developer focused on turning ideas into digital experiences.
          </h3>
          <p className='capitalize font-dm-sans text-zinc-600 mt-5'>
            I build clean, responsive interfaces with attention to detail, usability, and performance, aiming to create engaging websites that feel intuitive, modern, and purposeful.
          </p>
        </div>
      </div>

    </section>)
}

export default Aboutme