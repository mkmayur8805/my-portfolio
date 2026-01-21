import { createSlice } from "@reduxjs/toolkit";
import reactimg from "../assets/Services/react.png"
import responsive from "../assets/Services/responsive.png"
import staticimg from "../assets/Services/static.png"
import redesignimg from "../assets/Services/redesign.png"
import animationimg from "../assets/Services/animation.png"
import maintenanceimg from "../assets/Services/maintenance.png"

const ServicesSlice = createSlice({
    name:"ServicesSlice",
    initialState:[
  {
    title: "React Website",
    imgLink: reactimg,
    tags: [ "TypeScript", "Frontend", "Redux", "React Router" ],
    description:
      "I build modern and scalable React websites using reusable components, clean code structure, and optimized performance, focusing on user experience, fast loading, and future maintainability." 
  },
  {
    title: "Responsive Design",
    imgLink: responsive,
    tags: [ "CSS", "Tailwind CSS", "Flexbox", "Grid" ],
    description:
      "I create fully responsive websites that work perfectly on mobile, tablet, and desktop devices using flexible layouts, Tailwind CSS utilities, and modern CSS techniques."
  },
  {
    title: "Static Website",
    imgLink: staticimg,
    tags: [ "HTML", "CSS","JavaScript", "Tailwind CSS" ],
    description:
      "I develop fast and lightweight static websites using HTML, CSS, and Tailwind CSS, ideal for portfolios, small businesses, and landing pages with clean and professional design."
  },
  {
    title: "Website Redesign & UI Improvement",
    imgLink: redesignimg,
    tags: [ "UI/UX", "Design", "Typography", "Color Theory" ],
    description:
      "I redesign existing websites by improving layout, typography, colors, and overall user interface to make the website modern, visually appealing, and more user friendly."
  },
  {
    title: "Animations & Interactions",
    imgLink: animationimg,
    tags: [ "GSAP", "Framer Motion", "CSS Animations", "Lottie" ],
    description:
      "I add smooth animations and interactive effects using modern animation libraries to enhance user engagement, improve visual flow, and create a premium website experience."
  }, 
  {
    title: "Website Maintenance",
    imgLink: maintenanceimg,
    tags: [ "Content Updates", "UI Fixes", "Responsiveness", "Bug Fixing" ],
    description:
      "I provide ongoing website maintenance including content updates, UI fixes, responsiveness improvements, and bug fixing to ensure the website remains stable and up to date."
  }
],
    reducers:{}
})
export const {} = ServicesSlice.actions;
export default ServicesSlice.reducer;