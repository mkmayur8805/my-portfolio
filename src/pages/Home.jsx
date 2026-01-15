import Hero from "../sections/Hero"
import Aboutme from "../sections/Aboutme"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import IconsSlide from "../Components/IconsSlide"
import Services from "../sections/Services"
import Footer from "../sections/Footer"
import Testimonials from "../sections/Testimonials"
const Home = ({menu}) => {
  return (
    <div className='w-full'>
        <Hero />
        <Aboutme />
        <Skills />
        <IconsSlide />
        <Services />
        <Projects />
        <Testimonials />
        <Footer menu={menu} />
    </div>
  )
}

export default Home