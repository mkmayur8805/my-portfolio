import { useSelector } from 'react-redux'
import Head1 from '../Components/Head1'
import SectionTag from '../Components/SectionTag'
import ServiceCard from '../Components/ServiceCard'
import SEO from '../Components/SEO'

const Services = () => {
  const services = useSelector((state) => state.ServicesSlice)
  return (
    <section id='services' className='lg:p-30 p-8' >
      <SEO 
        description="Explore the range of services I offer, from web development to digital marketing, tailored to meet your needs."
        keywords="services, web development, digital marketing, SEO, design"
      />
      <SectionTag tag="My Services" />
        <Head1 text="What I Offer" />
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
    </section>
  )
}

export default Services