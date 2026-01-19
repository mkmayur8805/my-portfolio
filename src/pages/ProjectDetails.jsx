import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Hero from "../ProjectPageComponets/Hero"
import ContactFooter from "../ContactPageSections/ContactFooter"
import ProjectBody from "../ProjectPageComponets/ProjectBody"

const ProjectDetails = () => {
    const { slug } = useParams()
    const projects = useSelector((state) => state.ProjectsSlice)
    const project = projects.find((proj) => proj.slug === slug)
    if (!project) {
        return <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
            <h5>Project not found</h5>
            <Link to="/" className="text-(--primery-col) underline ml-2">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Go Back Home
            </button>
            </Link>
        </div>
    }
    return (
        <div className='w-full overflow-x-hidden'>
            <Hero title={project.title}/>
            <ProjectBody project={project}/>
            <ContactFooter />
        </div>
    )
}

export default ProjectDetails