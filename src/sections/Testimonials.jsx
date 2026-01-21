import SectionTag from '../Components/SectionTag'
import Head1 from '../Components/Head1'
import TestimonialCard from '../Components/TestimonialCard'
import { useSelector } from 'react-redux'
const Testimonials = () => {
  const testimonials = useSelector(state => state.TestimonialsSlice);
  return (
    <section id='testimonials' className='py-10 bg-grid2 p-8'>
      <div >
        <SectionTag tag="Testimonials" />
        <Head1 className="lg:w-100" text={`Happy Users Feedback`} />
      </div>
      <div note="carousel component" className='flex flex-col lg:flex-row gap-5 py-10 '>
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            obj={item}
          />
        ))}
      </div>

    </section>
  )
}

export default Testimonials