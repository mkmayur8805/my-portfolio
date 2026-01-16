import React from 'react'
import Head1 from '../Components/Head1'
import SectionTag from '../Components/SectionTag'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section className='lg:px-30 px-8' >
      <SectionTag tag="My Services" />
        <Head1 text="What I Offer" />
        <div className='mt-10'>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
    </section>
  )
}

export default Services