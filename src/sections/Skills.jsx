import Bar from '../Components/Bar'
import Head1 from '../Components/Head1'
import Para from '../Components/Para'
import { FaArrowRightLong } from "react-icons/fa6";
import SectionTag from '../Components/SectionTag'
const Skills = () => {
  const skill = [
    { tech: 'HTML5', percentage: '94%' },
    { tech: 'CSS3', percentage: '64%' },
    { tech: 'TailwindCSS', percentage: '87%' },
    { tech: 'TypeScript', percentage: '82%' },
    { tech: 'React.js', percentage: '85%' },
    { tech: 'GSAP', percentage: '79%' },
    { tech: 'Responsiveness', percentage: '81%' },
  ]
  return (
    <section className='mt-20 lg:px-30 px-8'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 lg:pr-20'>
          <SectionTag tag="Skills" />
          <Head1 text="Skills and education." />
          <div>
            {skill.map((obj, idx) => (
              <Bar key={idx} tech={obj.tech} percentage={obj.percentage} />
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 h-full'>
          <div>
            <Para className="lg:pt-12" text="Experienced in building modern React-based web applications with a focus on performance and clean architecture. Proficient with Git, Redux, and Figma to deliver responsive, production-ready interfaces." />
            <div className='flex items-center gap-2 mt-5 cursor-pointer text-xl font-semibold hover:text-(--primery-color) hover:-translate-y-1 transition-transform duration-300 w-fit'>
              <h5>Let's Talk</h5>
              <FaArrowRightLong className='text-(--primery-color) mt-1' />
            </div>
            <div className='lg:pl-10 lg:border-l border-(--primery-color) mt-10'>
              <h5 className='text-(--primery-color)'>2021-2023</h5>
              <h3 className='text-3xl font-semibold'>Bachelor of Computer Aplications</h3>
              <Para className="py-5" text={`I Completed my Bachelor's degree in Computer Applications From "KAANMS COLLEGE, SATANA" gaining a strong foundation in software development, programming languages, and computer science principles.`} />
            </div>
            <div className='lg:pl-10 lg:border-l border-(--primery-color)'>
              <h5 className='text-(--primery-color)'>2022-2026</h5>
              <h3 className='text-3xl font-semibold'>Freelancing Globally</h3>
              <Para className="py-5" text="Over the last 4 years, I’ve been handling React projects for clients across India and international markets. My experience includes working on real-world freelance projects via Upwork, Fiverr, and direct local collaborations. I focus on writing clean, scalable code and delivering reliable interfaces that perform well in production." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

{/* <h2>Skills</h2>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6+</li>
            <li>React.js</li>
        </ul>
        <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            
        </ul> */}