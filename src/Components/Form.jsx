import React, { useState } from 'react'
import SectionTag from './SectionTag'
import Para from './Para'
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
    return (
        <form className='shadow-xl p-4 pt-5 rounded-lg bg-white'>
            <SectionTag tag="contact" />
            <h4 className='text-[14vw] leading-[15vw] capitalize font-semibold mt-5'>have a cool Project?</h4>
            <Para className="my-5" text="Let’s collaborate and turn your ideas into a smooth, modern, high-performance website." />
            <div className='flex flex-col gap-4'>
                {inputs.map((input, index) => (
                    <FormInput value={form[input.type]} onChange={(e) => setForm({ ...form, [input.type]: e.target.value })} key={index} icon={input.icon} type={input.type} placeholder={input.placeholder} className="" />
                ))}
            </div>
            <div className='flex gap-2 capitalize'>
                <input className='accent-(--primery-color)' checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} type="checkbox" />
                <p>i agree to the site's <Link className='underline' to="/privacy">privacy policy</Link></p>
            </div>
            <button className='bg-(--primery-color) capitalize disabled:bg-gray-400 text-white px-6 py-3 rounded-md mt-4 hover:scale-105 duration-300 ease-in-out' type='submit'>send message</button>
        </form>
    )
}

export default Form