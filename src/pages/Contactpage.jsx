import React from 'react'
import Hero from '../ContactPageSections/Hero'
import FormSection from '../ContactPageSections/FormSection'
import ContactFooter from '../ContactPageSections/ContactFooter'
import SuccessPopup from '../Components/SuccessPopup'
import { useState } from 'react'

const Contactpage = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className='w-full overflow-x-hidden'>
      <SuccessPopup
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
      <Hero heading="get in touch" bgtext="contact" />
      <FormSection setShowSuccess={setShowSuccess} />
      <ContactFooter />
    </div>
  )
}

export default Contactpage