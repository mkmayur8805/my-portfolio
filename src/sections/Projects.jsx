import Head1 from "../Components/Head1"
import ProjectsSectionCard from "../Components/ProjectsSectionCard"
import SectionTag from '../Components/SectionTag'
const Projects = () => {
  return (
    <section className='bg-grid2 lg:p-20 p-8'>
      <SectionTag tag="Portfolio" />
      <Head1 text="Featured works" />
      <div className="pt-16">
        <ProjectsSectionCard />
        <ProjectsSectionCard />
        <ProjectsSectionCard />
      </div>
      <div className=" whitespace-nowrap pt-16 flex gap-5 justify-center">
        <button className="px-8 py-3 text-(--primery-color) border text-lg font-semibold border-(--primery-color) rounded-full hover:bg-(--primery-color) hover:text-white transition">
          See More Projects
        </button>
        <button className="px-8 py-3 border text-lg font-semibold rounded-full transition bg-(--primery-color) text-white border-(--primery-color) hover:bg-white hover:text-(--primery-color)">
          Hire me
        </button>
      </div>
    </section>
  )
}

export default Projects