import Para from "../Components/Para" 
import proimg from "../assets/gaytri-solar.png"
import TechTag from "./TechTag"
const ProjectsSectionCard = () => {
    return (
        <div note="This is a featured project card" className="p-8 flex gap-8 bg-white rounded-lg shadow-lg mb-12">
            <div className="w-1/2 overflow-hidden rounded-lg shadow-lg relative">
                <div className="opacity-0 hover:opacity-100 flex justify-center items-center absolute bg-black/40 h-full w-full transition-opacity duration-300">
                    <button onClick={()=> (window.open("https://gayatrisolar.co.in" ,"_blank"))} className="p-4 rounded-full bg-white text-black transition-colors duration-300 cursor-pointer">View <br /> Project</button>
                </div>
                <img src={proimg} alt="project image" className="rounded-lg shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-1/2">
                <h3 className="text-4xl font-dm-sans font-semibold">Gayatri Solar Energy <br /> Agency Website</h3>
                <Para className="pt-4 font-dm-sans" text="Developed a responsive website for Gayatri Solar Energy Agency using HTML, CSS, and JavaScript. Implemented features such as product listings, contact forms, and service descriptions to enhance user experience and drive customer engagement." />
                <div className="flex gap-2 mt-4">
                    <TechTag tag="React.js" />
                    <TechTag tag="Tailwind CSS" />
                    <TechTag tag="Email.js" />
                    <TechTag tag="Swiper.js" />
                    <TechTag tag="React Icons" />
                </div>
                <div className=" flex gap-4">
                    <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:-translate-y-1">Project Details</button>
                     <button onClick={()=> (window.open("https://gayatrisolar.co.in" ,"_blank"))} className="mt-6 px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white  transition-colors duration-300 cursor-pointer">Visit Website</button>
                </div>

            </div>

        </div>
    )
}

export default ProjectsSectionCard