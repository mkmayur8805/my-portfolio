import React, { useState } from 'react'
import FormInput from './FormInput'
import { FaUser, FaPen } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Form = ({ setShowSuccess }) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        note: "",
        agree: false
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const inputs = [
        { name: "name", icon: <FaUser />, type: "text", placeholder: "Your Name" },
        { name: "email", icon: <IoMail />, type: "email", placeholder: "info@" },
        { name: "phone", icon: <IoCall />, type: "tel", placeholder: "Your Number" },
        { name: "note", icon: <FaPen />, type: "textarea", placeholder: "Describe your project" },
    ];

    // ✅ VALIDATION FUNCTION
    const validate = () => {
        let newErrors = {};

        if (!form.name || form.name.length < 3)
            newErrors.name = "Name must be at least 3 characters";

        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            newErrors.email = "Enter valid email";

        if (!form.phone.match(/^[0-9]{10}$/))
            newErrors.phone = "Enter valid 10 digit number";

        if (!form.note)
            newErrors.note = "Project description is required";

        if (!form.agree)
            newErrors.agree = "You must agree to privacy policy";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ SUBMIT HANDLER
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                phone: form.phone,
                message: form.note,
            },
            PUBLIC_KEY
        )
            .then(() => {
                setShowSuccess(true);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    note: "",
                    agree: false
                });
            })
            .catch(() => {
                console.log("Something went wrong ❌");
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='shadow-xl lg:p-10 p-4 rounded-lg bg-white'>

                <h4 className='lg:text-5xl mb-6 text-[12vw] capitalize font-semibold'>
                    have a cool Project?
                </h4>

                <div className='flex flex-col gap-4'>
                    {inputs.map((input) => (
                        <div key={input.name}>
                            <FormInput
                                icon={input.icon}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={form[input.name]}
                                onChange={(e) =>
                                    setForm({ ...form, [input.name]: e.target.value })
                                }
                            />
                            {errors[input.name] && (
                                <p className='text-red-500 text-sm'>{errors[input.name]}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex gap-2 py-3 capitalize'>
                    <input
                        type="checkbox"
                        checked={form.agree}
                        onChange={(e) =>
                            setForm({ ...form, agree: e.target.checked })
                        }
                        className='accent-(--primery-color) cursor-pointer'
                    />
                    <p>
                        i agree to the site's{" "}
                        <Link className='underline hover:text-(--primery-color)' to="/privacy-policy">
                            privacy policy
                        </Link>
                    </p>
                </div>
                {errors.agree && <p className='text-red-500 text-sm'>{errors.agree}</p>}

                <div className='flex gap-2'>
                    <button
                    disabled={loading}
                    className='bg-(--primery-color) capitalize cursor-pointer w-full disabled:bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-black duration-300 font-semibold mt-4 hover:shadow-xl'
                >
                    {loading ? "Sending..." : "send message"}
                </button>
                <div onClick={()=>window.open("tel:+917448046577")} className='border-black border capitalize cursor-pointer w-full text-center disabled:bg-gray-400 hover:text-white px-6 py-3 rounded-md hover:bg-black duration-300 font-semibold mt-4 hover:shadow-xl'>call now</div>
                </div>
            </form>
        </>
    )
}

export default Form;
