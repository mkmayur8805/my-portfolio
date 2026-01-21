import { useCallback } from "react";
import { useSelector } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import SectionTag from '../Components/SectionTag'
import Head1 from '../Components/Head1'
import TestimonialCard from '../Components/TestimonialCard'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = useSelector(state => state.TestimonialsSlice);

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,            // Infinite loop
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,         // 4s per slide
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section id='testimonials' className='py-10 bg-grid2 p-8'>
      <div>
        <SectionTag tag="Testimonials" />
        <Head1 className="lg:w-100" text={`Happy Users Feedback`} />
      </div>

      {/* Carousel */}
      <div className="relative py-10">
        <div ref={emblaRef} className="overflow-visible">
          <div className="flex gap-5">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] lg:flex-[0_0_33.333%]"
              >
                <TestimonialCard obj={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-6 mt-4">
          <button
            onClick={scrollPrev}
            className="p-3 cursor-pointer rounded-full bg-white text-(--primery-color)"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 cursor-pointer rounded-full bg-white text-(--primery-color)"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
