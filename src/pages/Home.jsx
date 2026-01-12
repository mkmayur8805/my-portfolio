
import Hero from "../sections/Hero"
import Aboutme from "../sections/Aboutme"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
const Home = () => {
  return (
    <div className='w-full'>
        <Hero />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home