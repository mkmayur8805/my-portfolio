import React from 'react'
import SectionTag from '../Components/SectionTag'
import Para from '../Components/Para'
import ContactFooter from '../ContactPageSections/ContactFooter'
import { FaFileContract } from "react-icons/fa6";

const PrivacyPolicy = () => {
    return (
        <div className='w-full overflow-x-hidden'>
            <div className='w-full flex flex-col lg:flex-row lg:px-30 lg:py-30 px-8 py-12'>
                <div className='lg:p-8'>
                    <SectionTag className="lg:text-lg!" tag="privacy policy" />
                    <h4 className='lg:text-5xl text-[8.5vw] my-6 font-semibold leading-12 lg:leading-15'>
                        Your Privacy Matters
                    </h4>
                    <Para className="lg:my-6" text="We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services." />

                    <div className='space-y-6 text-lg'>
                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Information Collection:</strong> We may collect your name, email, phone number, and any details you provide while contacting us or using our services.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Third-Party Tools & Integrations:</strong> Our website uses <strong>EmailJS</strong> to handle contact form submissions. Email addresses and messages you provide are securely transmitted via EmailJS and used only to respond to your inquiries.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Google Fonts:</strong> We use Google Fonts to enhance the appearance of our website text. Using these fonts may involve communication with Google servers to load the font styles.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Analytics:</strong> We use Google Analytics to understand how visitors interact with our site. This data is anonymous and helps us improve user experience. No personal identifying information is tracked.
                            </p>
                        </div>


                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Use of Information:</strong> Your information is used solely to respond to your inquiries, improve our services, and provide a better user experience.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Data Security:</strong> We implement reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Third-Party Services:</strong> We do not share your personal data with third parties except when required for legal obligations or trusted service providers necessary to run the website.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Cookies:</strong> Our website may use cookies to enhance user experience. You can manage cookies through your browser settings.
                            </p>
                        </div>

                        <div className='flex gap-2 items-start'>
                            <FaFileContract className='text-(--primery-color) mt-1' />
                            <p>
                                <strong>Changes to Policy:</strong> We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </div>
    )
}

export default PrivacyPolicy

