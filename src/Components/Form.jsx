import React, { useState } from 'react'
import FormInput from './FormInput'
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        note: "",
        agree: false
    });
    let inputs = [
        { icon: <FaUser />, type: "text", placeholder: "Your Name" },
        { icon: <IoMail />, type: "email", placeholder: "info@" },
        { icon: <IoCall />, type: "tel", placeholder: "Your Number" },
        { icon: <FaPen />, type: "note", placeholder: "Describe your project" }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }
    return (
        <form onSubmit={handleSubmit} className=' shadow-xl lg:p-10 lg:pt-8 p-4 pt-5 rounded-lg bg-white'>
            
            <h4 className='lg:text-5xl mb-6 text-[14vw] lg:leading-12 leading-[15vw] capitalize font-semibold mt-5'>have a cool Project?</h4>
            <div className='flex flex-col gap-4'>
                {inputs.map((input, index) => (
                    <FormInput value={form[input.type]} onChange={(e) => setForm({ ...form, [input.type]: e.target.value })} key={index} icon={input.icon} type={input.type} placeholder={input.placeholder} className="" />
                ))}
            </div>
            <div className='flex gap-2 lg:py-3 capitalize'>
                <input className='accent-(--primery-color)' checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} type="checkbox" />
                <p>i agree to the site's <Link className='underline hover:text-(--primery-color) duration-300' to="/privacy">privacy policy</Link></p>
            </div>
            <button className='bg-(--primery-color) capitalize disabled:bg-gray-400 text-white px-6 py-3 rounded-md hover:-translate-y-1 duration-300 ease-in-out' type='submit'>send message</button>
        </form>
    )
}

export default Form