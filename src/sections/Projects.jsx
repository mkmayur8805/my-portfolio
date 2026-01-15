import Head1 from "../Components/Head1"
import ProjectsSectionCard from "../Components/ProjectsSectionCard"
import SectionTag from '../Components/SectionTag'
const Projects = () => {
  return (
    <section className='p-30 bg-grid2'>
      <SectionTag tag="Portfolio" />
      <Head1 text="Featured works" />
      <div className="pt-16">
        <ProjectsSectionCard />
        <ProjectsSectionCard />
        <ProjectsSectionCard />
      </div>
      <div className="pt-16 flex justify-center">
        <button className="px-8 py-3 text-(--primery-color) border text-lg font-semibold border-(--primery-color) rounded-full hover:bg-(--primery-color) hover:text-white transition">
          See More Projects
        </button>
      </div>
    </section>
  )
}

export default Projects