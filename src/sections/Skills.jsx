import Bar from '../components/Bar'
import Head1 from '../Components/Head1'
import Para from '../Components/Para'
import { FaArrowRightLong } from "react-icons/fa6";
const Skills = () => {
  const skill = [
    {tech: 'HTML5', percentage: '94%'},
    {tech: 'CSS3', percentage: '60%'},
    {tech: 'TailwindCSS', percentage: '87%'},
    {tech: 'JavaScript ES6+', percentage: '82%'},
    {tech: 'React.js', percentage: '85%'},
    {tech: 'GSAP', percentage: '79%'},
  ]
  return (
    <section className='p-30 min-h-screen'>
      <div className='flex'>
        <div className='w-1/2 pr-20'>
          <h2 className='text-xl text-(--primery-color)'>Skills</h2>
          <Head1 text="skills and education." />
          <div>
            {skill.map((obj,idx)=> (
              <Bar key={idx} tech={obj.tech} percentage={obj.percentage} />
            ))}
          </div>
        </div>
        <div className='w-1/2 h-full'>
            <Para text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ipsum tenetur modi amet error rem molestiae et, vel adipisci, porro delectus sequi veritatis beatae voluptates, laudantium cupiditate cum deleniti! Nobis impedit repellat sint laboriosam, unde assumenda possimus temporibus, vitae culpa veniam voluptatum doloremque aspernatur explicabo!" />
            <div className='flex items-center gap-2 mt-5 cursor-pointer text-xl font-semibold hover:text-(--primery-color) hover:-translate-y-1 transition-transform duration-300' >
              <h5>Let's Talk</h5>
              <FaArrowRightLong className='text-(--primery-color) mt-1'/>
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