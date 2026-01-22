import Hero from '../ContactPageSections/Hero'
import ContactFooter from '../ContactPageSections/ContactFooter'
import PortfolioBody from '../ContactPageSections/PortfolioBody'

const Portfolio = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Hero heading="Portfolio" bgtext="portfolio" />
      <PortfolioBody />
      <ContactFooter />
    </div>
  )
}

export default Portfolio