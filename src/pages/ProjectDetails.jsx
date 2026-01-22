import { Link, Navigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Hero from "../ProjectPageComponets/Hero"
import ContactFooter from "../ContactPageSections/ContactFooter"
import ProjectBody from "../ProjectPageComponets/ProjectBody"
import SEO from '../Components/SEO'

const ProjectDetails = () => {
    const { slug } = useParams()
    const projects = useSelector((state) => state.ProjectsSlice)
    const project = projects.find((proj) => proj.slug === slug)
    if (!project) {
        return <Navigate to="/error-404" replace />
    }
    return (
        <div className='w-full overflow-x-hidden'>
            <SEO 
                title={project.title} 
                description={project.description2} 
                image={project.mainImage}
            />
            <Hero title={project.title}/>
            <ProjectBody project={project}/>
            <ContactFooter />
        </div>
    )
}

export default ProjectDetails