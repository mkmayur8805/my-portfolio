import { createSlice } from "@reduxjs/toolkit";
import proimg from "../assets/gaytri-solar.png"
const ProjectsSlice = createSlice({
    name: "ProjectsSlice",
    initialState: [
        { id: 1,
            title: "Gayatri Solar Energy",
            description: "Agency Website",
            link: "/portfolio/gayatri-solar-energy",
            websiteLink: "https://gayatrisolarenergy.co.in/",
            paragraph:"Developed a responsive website for Gayatri Solar Energy Agency using HTML, CSS, and JavaScript. Implemented features such as product listings, contact forms, and service descriptions to enhance user experience and drive customer engagement.",
            tags: ["React.js", "Tailwind CSS", "Email.js", "Swiper.js", "React Icons"],
            img: proimg },
            {
            id: 2,
            title: "TWICE",
            description: "Interaction & Development",
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