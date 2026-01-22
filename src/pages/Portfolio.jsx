import Hero from '../ContactPageSections/Hero'
import ContactFooter from '../ContactPageSections/ContactFooter'
import PortfolioBody from '../ContactPageSections/PortfolioBody'
import SEO from "../Components/SEO"

const Portfolio = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <SEO description="Explore my portfolio showcasing a variety of projects demonstrating my skills in web development and design." keywords="portfolio, projects, web development, design, skills" />
      <Hero heading="Portfolio" bgtext="portfolio" />
      <PortfolioBody />
      <ContactFooter />
    </div>
  )
}

export default Portfolio