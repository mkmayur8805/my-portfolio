import SectionTag from '../Components/SectionTag'
import Form from '../Components/Form'
import Para from '../Components/Para'
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const FormSection = ({ setShowSuccess }) => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row lg:px-30 lg:py-30 px-8 py-12'>
      <div className='lg:w-1/2 lg:p-8'>
      <SectionTag className="lg:text-lg!" tag="contact" />
        <h4 className='lg:text-5xl text-[8.5vw] my-6 font-semibold leading-12 lg:leading-15'>Have Any Questions? Let’s Connect and Create Something Meaningful Together!</h4>
        <Para className="lg:my-6" text="No matter the size or complexity of your idea, I’d love to hear about it. Whether you’re starting from scratch or looking to improve an existing website, feel free to drop a message. Let’s collaborate, explore your vision, and create something meaningful, impactful, and built to perform." />
        <div className='text-xl'>
          <div onClick={()=> window.open("mailto:mkmayur4480@gmail.com" , "_blank")} className='flex gap-2 items-center mt-4'>
            <IoMail className='text-(--primery-color)' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>mkmayur4480@gmail.com</p>
          </div>
          <div onClick={()=> window.open("tel:+917448046577" , "_blank")} className='flex gap-2 items-center mt-4'>
            <IoCall className='text-(--primery-color)' />
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'>+91 7448046577</p>
          </div>
          <div className='flex gap-2 items-center mt-4'>
            <FaLocationDot className='text-(--primery-color)'/>
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>nashik, mh, India-423301</p>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 lg:p-8 lg:border-l lg:border-gray-300 lg:mt-0 mt-8'>
        <Form setShowSuccess={setShowSuccess} />
      </div>

    </div>
  )
}

export default FormSection