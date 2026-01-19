import React from 'react'
import Hero from '../ContactPageSections/Hero'
import FormSection from '../ContactPageSections/FormSection'
import ContactFooter from '../ContactPageSections/ContactFooter'

const Contactpage = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Hero />
      <FormSection />
      <ContactFooter />
    </div>
  )
}

export default Contactpage