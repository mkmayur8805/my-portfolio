import Para from "../Components/Para" 
import proimg from "../assets/gaytri-solar.png"
import TechTag from "./TechTag"
const ProjectsSectionCard = () => {
    return (
        <div note="This is a featured project card" className="cursor-default p-4 lg:p-8 flex lg:flex-row flex-col gap-4 lg:gap-8 bg-white rounded-lg shadow-xl mb-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="lg:w-1/2 overflow-hidden rounded-sm shadow-lg relative">
                <div className="opacity-0 hover:opacity-100 flex justify-center items-center absolute bg-black/40 h-full w-full transition-opacity duration-300">
                    <button onClick={()=> (window.open("https://gayatrisolar.co.in" ,"_blank"))} className="p-4 rounded-full bg-white text-black transition-colors duration-300 cursor-pointer">View <br /> Project</button>
                </div>
                <img src={proimg} alt="project image" className="rounded-sm shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="lg:w-1/2">
                <h3 className="text-[7vw] lg:text-4xl font-dm-sans font-semibold leading-tight">Gayatri Solar Energy <br /> Agency Website</h3>
                <Para className="pt-2 lg:text-lg! text-[4vw] lg:pt-4 font-dm-sans" text="Developed a responsive website for Gayatri Solar Energy Agency using HTML, CSS, and JavaScript. Implemented features such as product listings, contact forms, and service descriptions to enhance user experience and drive customer engagement." />
                <div className="flex flex-wrap gap-2 mt-4">
                    <TechTag tag="React.js" />
                    <TechTag tag="Tailwind CSS" />
                    <TechTag tag="Email.js" />
                    <TechTag tag="Swiper.js" />
                    <TechTag tag="React Icons" />
                </div>
                <div className="flex gap-2 text-nowrap text-sm lg:text-base">
                    <button className="mt-6 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:-translate-y-1">Project Details</button>
                     <button onClick={()=> (window.open("https://gayatrisolar.co.in" ,"_blank"))} className="mt-6 px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white  transition-colors duration-300 cursor-pointer">Visit Website</button>
                </div>

            </div>

        </div>
    )
}

export default ProjectsSectionCard