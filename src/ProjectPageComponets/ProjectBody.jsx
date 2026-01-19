import React from 'react'
import Para from "../Components/Para"
import { IoIosArrowForward } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';
const ProjectBody = ({ project }) => {
    return (
        <div className='lg:p-36 p-8 pb-20'>
            <div className='w-full h-fit overflow-hidden rounded-2xl shadow-lg '>
                <img className='w-full h-full hover:scale-105 transition-transform duration-300' src={project.img} alt={project.title} />
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div className='lg:w-[70vw] w-full'>
                    <div className='flex items-center justify-center lg:my-20 my-8'>
                        <Para className="" text={project.paragraph} />
                    </div>
                    <div className='flex lg:flex-row flex-col gap-5 justify-between capitalize '>
                        <div>
                            <h2 className='text-gray-600'>client</h2>
                            <p className='text-black font-semibold'>{project.client}</p>
                        </div>
                        <div>
                            <h2 className='text-gray-600'>start</h2>
                            <p className='text-black font-semibold'>{project.start}</p>
                        </div>
                        <div>
                            <h2 className='text-gray-600'>complete</h2>
                            <p className='text-black font-semibold'>{project.complete}</p>
                        </div>
                        <div>
                            <h2 className='text-gray-600'>Service</h2>
                            <p className='text-black font-semibold'>{project.role}</p>
                        </div>
                        <div>
                            <h2 className='text-gray-600'>website</h2>
                            <p className='text-black font-semibold'>{project.website}</p>
                        </div>
                    </div>
                    <div className='lg:my-20 my-8 shadow-lg rounded-2xl overflow-hidden'>
                        <img className='w-full h-auto hover:scale-105 transition-transform duration-300' src={project.img2} alt={project.title} />
                    </div>
                    <div className='flex lg:flex-row flex-col gap-8 lg:my-20'>
                        <div className='lg:w-1/3 shadow-lg rounded-2xl overflow-hidden'>
                            <img className=' h-full hover:scale-105 transition-transform duration-300' src={project.img3} alt={project.title} />
                        </div>
                        <div className='lg:w-1/3 shadow-lg rounded-2xl overflow-hidden'>
                            <img className=' h-full hover:scale-105 transition-transform duration-300' src={project.img4} alt={project.title} />
                        </div>
                        <div className='lg:w-1/3 shadow-lg rounded-2xl overflow-hidden'>
                            <img className=' h-full hover:scale-105 transition-transform duration-300' src={project.img5} alt={project.title} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center my-8'>
                        <Para className="" text={project.paragraph2} />
                    </div>
                    <div className='flex justify-between'>
                        <Link to="/portfolio">
                        <button className='capitalize lg:w-auto w-[45.64vw] py-2 text-[5vw] text-start leading-tight lg:text-2xl font-semibold flex items-center gap-3 hover:text-(--primery-color) duration-500 hover:-translate-x-2'>
                            <TbGridDots className='border p-2 text-5xl hover:rotate-45 duration-300 rounded-full hover:border-(--primery-color)'/>
                            more projects
                        </button>
                        </Link>
                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer"><button className='capitalize lg:w-auto w-[35.84vw] py-2 text-[5vw] text-end leading-tight lg:text-2xl font-semibold flex items-center gap-3 hover:text-(--primery-color) duration-300 hover:translate-x-2'>
                            truly live
                            <IoIosArrowForward className='border p-1 text-5xl rounded-full hover:border-(--primery-color) hover:rotate-360 duration-300'/>
                        </button></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectBody