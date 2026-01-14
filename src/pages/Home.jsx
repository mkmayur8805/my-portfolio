import Hero from "../sections/Hero"
import Aboutme from "../sections/Aboutme"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import IconsSlide from "../Components/IconsSlide"
import Services from "../sections/Services"
const Home = () => {
  return (
    <div className='w-full'>
        <Hero />
        <Aboutme />
        <Skills />
        <IconsSlide />
        <Services />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home