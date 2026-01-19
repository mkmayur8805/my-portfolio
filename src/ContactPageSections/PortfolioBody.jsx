import { useSelector } from 'react-redux'
import PortfolioCard from '../Components/PortfolioCard'
const PortfolioBody = () => {
    const projects = useSelector((state) => state.ProjectsSlice)
  return (
    <div className='lg:p-30 p-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12'>
            {projects.map((project,idx)=>(
                <PortfolioCard key={idx} title={project.title} description={project.description} link={project.link} img={project.img} />
                
        ))}
    </div>)
}

export default PortfolioBody