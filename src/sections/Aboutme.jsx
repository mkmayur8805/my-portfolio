import SectionTag from '../Components/SectionTag'
import Para from '../Components/Para'
const Aboutme = () => {
  return (
    <section className='px-30'>
      <div className='flex'>
        <div>
          <div className='h-120 w-120 overflow-hidden bg-center bg-cover rounded-sm'>
            <img className='h-full w-full hover:scale-105 transition-transform duration-300' src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-1.png" alt="" />
          </div>
        </div>
        <div className='pl-28'>
          <SectionTag tag="About me" />
          <h3 className='text-5xl font-semibold font-dm-sans mt-5 capitalize leading-14'>
            creative frontend developer focused on turning ideas into digital experiences.
          </h3>
          <Para className="mt-5" text="I focus on building clean, scalable, and responsive user interfaces with a strong emphasis on usability and performance. My approach combines thoughtful UI development with maintainable code, ensuring modern web experiences that are intuitive, reliable, and built to scale over time." />
          <div className='border-t border-(--primery-color) mt-5 text-center font-semibold text-zinc-600'>
            <h5 className='mt-3 text-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer'>Hire me for your next project. <span className='text-(--primery-color) cursor-pointer'>Let’s Talk!</span></h5>
          </div>
        </div>
      </div>

    </section>)
}

export default Aboutme