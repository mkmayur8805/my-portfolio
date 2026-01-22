import { Link, Navigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Hero from "../ProjectPageComponets/Hero"
import ContactFooter from "../ContactPageSections/ContactFooter"
import ProjectBody from "../ProjectPageComponets/ProjectBody"

const ProjectDetails = () => {
    const { slug } = useParams()
    const projects = useSelector((state) => state.ProjectsSlice)
    const project = projects.find((proj) => proj.slug === slug)
    if (!project) {
        return <Navigate to="/error-404" replace />
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