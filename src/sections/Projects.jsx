import Head1 from "../Components/Head1"
import ProjectsSectionCard from "../Components/ProjectsSectionCard"
const Projects = () => {
  return (
    <section className='p-30 bg-grid2'>
      <h2 className='text-xl text-(--primery-color)'>Portfolio</h2>
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