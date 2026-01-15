import React from 'react'
import Head1 from '../Components/Head1'
import SectionTag from '../Components/SectionTag'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section className='p-30'>
      <SectionTag tag="My Services" />
        <Head1 text="What I Offer" />
        <div className='flex flex-col mt-10'>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
    </section>
  )
}

export default Services