import SectionTag from '../Components/SectionTag'
import Para from '../Components/Para'
import img from '../assets/about.png'
const Aboutme = () => {
  return (
    <section className='lg:px-30 px-8'>
      <div className='flex flex-col-reverse lg:flex-row'>
        <div>
          <div className='lg:h-140 h-120 lg:w-120 mt-12 lg:mt-0 overflow-hidden bg-bottom bg-cover rounded-sm'>
            <img className=' w-full hover:scale-105 transition-transform duration-300' src={img} alt="" />
          </div>
          <div className='lg:hidden border-t border-(--primery-color) mt-10 text-center font-semibold text-zinc-600'>
            <h5 className='mt-3 text-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer'>Hire me for your next project. <span className='text-(--primery-color) cursor-pointer'>Let’s Talk!</span></h5>
          </div>
        </div>
        <div className='lg:pl-28'>
          <SectionTag tag="About me" />
          <h3 className=' text-[9.8vw] lg:text-5xl font-semibold font-dm-sans mt-5 capitalize leading-13 lg:leading-14'>
            creative frontend developer focused on turning ideas into digital experiences.
          </h3>
          <Para className="mt-5" text="I focus on building clean, scalable, and responsive user interfaces with a strong emphasis on usability and performance. My approach combines thoughtful UI development with maintainable code, ensuring modern web experiences that are intuitive, reliable, and built to scale over time." />
          <div className=' hidden lg:block border-t border-(--primery-color) mt-5 text-center font-semibold text-zinc-600'>
            <h5 className='mt-3 text-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer'>Hire me for your next project. <span className='text-(--primery-color) cursor-pointer'>Let’s Talk!</span></h5>
          </div>
        </div>
      </div>

    </section>)
}

export default Aboutme