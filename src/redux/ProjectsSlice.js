import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/gaytri-solar.png";
import img2 from "../assets/gaytri-solar2.png";
import img3 from "../assets/gaytri-solar3.jpeg";
import img4 from "../assets/gaytri-solar4.jpg";
import img5 from "../assets/gaytri-solar5.jpg";

const ProjectsSlice = createSlice({
    name: "ProjectsSlice",
    initialState: [
        { id: 1,
            title: "Gayatri Solar Energy",
            description: "Agency Website",
            link: "/portfolio/gayatri-solar-energy",
            slug: "gayatri-solar-energy",
            website:"GAYATRISOLARENERGY.CO.IN",
            client:"prasad patil",
            start:"mar 2024",
            complete:"apr 2024",
            role:"Frontend Development",
            websiteLink: "https://gayatrisolar.co.in/",
            paragraph:"Developed a responsive website for Gayatri Solar Energy Agency using HTML, CSS, and JavaScript. Implemented features such as product listings, contact forms, and service descriptions to enhance user experience and drive customer engagement.",
            paragraph2:"I designed and developed a complete, responsive website for Gayatri Solar using React.js, focusing on both functionality and user experience. The website featured a custom-built Estimate Calculator that allowed users to enter their monthly electricity bill amount and automatically calculate the required solar system capacity in kilowatts. This helped users easily understand their solar energy needs without manual calculations. The project included two main pages: a Home page and a Gallery page, both developed entirely in React. I used React Icons extensively to improve visual clarity and create a modern interface. Additionally, I independently handled domain configuration, deployment, and hosting of the website on Vercel. This project strengthened my skills in React development, component-based architecture, UI design, and real-world deployment workflows.",
            tags: ["React.js", "Tailwind CSS", "Email.js", "Swiper.js", "React Icons"],
            img: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            img5: img5,
            }
    ],
    reducers: {}

})

export const { openMenu, closeMenu } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;