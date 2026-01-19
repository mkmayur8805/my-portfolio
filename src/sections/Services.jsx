import Head1 from '../Components/Head1'
import SectionTag from '../Components/SectionTag'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  const services = [
  {
    title: "React Website",
    imgLink: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "I build modern and scalable React websites using reusable components, clean code structure, and optimized performance, focusing on user experience, fast loading, and future maintainability."
  },
  {
    title: "Responsive Design",
    imgLink: "https://info.traceparts.com/wp-content/uploads/2021/11/website-redesign.png",
    description:
      "I create fully responsive websites that work perfectly on mobile, tablet, and desktop devices using flexible layouts, Tailwind CSS utilities, and modern CSS techniques."
  },
  {
    title: "Static Website",
    imgLink: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "I develop fast and lightweight static websites using HTML, CSS, and Tailwind CSS, ideal for portfolios, small businesses, and landing pages with clean and professional design."
  },
  {
    title: "Website Redesign & UI Improvement",
    imgLink: "https://nice-branding.com/wp-content/uploads/2022/06/website-redesign-2@2x-scaled-1.jpg",
    description:
      "I redesign existing websites by improving layout, typography, colors, and overall user interface to make the website modern, visually appealing, and more user friendly."
  },
  {
    title: "Animations & Interactions",
    imgLink: "https://htmlburger.com/blog/wp-content/uploads/2024/12/best_animation_websites-826x464.webp",
    description:
      "I add smooth animations and interactive effects using modern animation libraries to enhance user engagement, improve visual flow, and create a premium website experience."
  },
  {
    title: "Website Maintenance",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVw9Wbq3i3QkdpuXd0Swo5s1zSAc1xgn8eUQ&s",
    description:
      "I provide ongoing website maintenance including content updates, UI fixes, responsiveness improvements, and bug fixing to ensure the website remains stable and up to date."
  }
];
  return (
    <section id='services' className='lg:p-30 p-8 bg-grid2' >
      <SectionTag tag="My Services" />
        <Head1 text="What I Offer" />
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
    </section>
  )
}

export default Services