import SectionTag from '../Components/SectionTag'
import Head1 from '../Components/Head1'
import TestimonialCard from '../Components/TestimonialCard'
const Testimonials = () => {
  return (
    <section className='py-10 bg-grid2 p-8'>
      <div >
        <SectionTag tag="Testimonials" />
        <Head1 className="lg:w-100" text={`Happy Users Feedback`} />
      </div>
      <div note="carousel component" className=' z-10 relative flex flex-col lg:flex-row gap-5 py-10 '>
        <div className='hidden z-20 absolute pt-8 left-0 top-0 w-full h-full lg:flex justify-between items-center pointer-events-none'>
          <div className='w-30 h-full bg-linear-to-r from-[#f0f4e9] to-transparent'></div>
          <div className='w-30 h-full bg-linear-to-l from-[#f0f4e9] to-transparent'></div>
        </div>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>

    </section>
  )
}

export default Testimonials