import { createSlice } from "@reduxjs/toolkit";
import proimg from "../assets/gaytri-solar.png"
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
            img: proimg,
            img2: "/src/assets/gaytri-solar2.png",
            img3: "/src/assets/gaytri-solar3.jpeg",
            img4: "/src/assets/gaytri-solar4.jpg",
            img5: "/src/assets/gaytri-solar5.jpg",
            },
            {
            id: 2,
            title: "TWICE",
            description: "Interaction & Development",
            slug: "twice",
            link: "/portfolio/twice",
            websiteLink: "https://twicemediahouse.com/",
            paragraph:"This is a brief description of Project Two, highlighting its features and technologies used.",
            tags: ["Tech1", "Tech2", "Tech3"],
            img: "/src/assets/twice.png"

            },
            {
            id: 3,
            title: "Project Three",
            description: "Description for Project Three",
            slug: "project-three",
            link: "/portfolio/project-three",
            websiteLink: "https://example.com/project-three",
            paragraph:"This is a brief description of Project Three, highlighting its features and technologies used.",
            tags: ["TechA", "TechB", "TechC"],
            img: "path/to/project-three-image.png"
            },
            {
            id: 4,
            title: "Project Four",
            description: "Description for Project Four",
            slug: "project-four",
            link: "/portfolio/project-four",
            websiteLink: "https://example.com/project-four",
            paragraph:"This is a brief description of Project Four, highlighting its features and technologies used.",
            tags: ["TechX", "TechY", "TechZ"],
            img: "path/to/project-four-image.png"
            }
    ],
    reducers: {}

})

export const { openMenu, closeMenu } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;