import { useSelector } from "react-redux"
import Head1 from "../Components/Head1"
import ProjectsSectionCard from "../Components/ProjectsSectionCard"
import SectionTag from '../Components/SectionTag'
import { Link } from "react-router-dom"
const Projects = () => {
  const showProjects = useSelector((state) => state.ProjectsSlice)
  return (
    <section id="portfolio" className='bg-grid2 lg:p-20 p-8'>
      <SectionTag tag="Portfolio" />
      <Head1 text="Featured works" />
      <div className="pt-16">
        {showProjects.map((project, idx) => (
          idx < 3 && <ProjectsSectionCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <div className=" whitespace-nowrap gap-2 p-8 pt-16 flex lg:text-base justify-center">
        <Link to="/portfolio">
          <button className="cursor-pointer px-3 py-2 text-(--primery-color) border font-semibold border-(--primery-color) rounded-full hover:bg-(--primery-color) hover:text-white transition">
            More Projects
          </button>
        </Link>
        <Link to="/contact">
          <button className="cursor-pointer px-3 py-2 border font-semibold rounded-full transition bg-(--primery-color) text-white border-(--primery-color) hover:bg-transparent hover:text-(--primery-color)">
            Hire me
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Projects