import { createSlice } from "@reduxjs/toolkit";

const TestimonialsSlice = createSlice({
    name: "TestimonialsSlice",
    initialState: [
        {
            name: "Prasad patil",
            img:"",
            stars: 5,
            title: "CEO",
            feedback: "Mayur delivered a professional and well-structured website aligned with our business needs. The execution was clear, consistent, and timely. We are satisfied with the overall quality of work."
        },
        {
            name: "Anjali Sharma",
            img:"",
            stars: 4, title: "Project Manager",
            feedback: "Working with Mayur was a fantastic experience. He understood our requirements perfectly and translated them into a user-friendly website. His attention to detail and commitment to deadlines were impressive."
        },
        {
            name: "Aditya Suryawanshi",
            img:"",
            stars: 5,
            title: "Entrepreneur",
            feedback: "Mayur exceeded our expectations in every aspect. The website he developed is visually appealing, easy to navigate, and functions flawlessly. His professionalism and expertise made the entire process smooth and enjoyable."
        },
        {
            name: "Sneha Kulkarni",
            img:"",
            stars: 4,
            title: "Marketing Head",
            feedback: "We are extremely pleased with the website Mayur created for us. It effectively represents our brand and has received positive feedback from our clients. Mayur's dedication to quality and customer satisfaction is commendable."
        }
    ],
    reducers: {}
})
export const { } = TestimonialsSlice.actions;
export default TestimonialsSlice.reducer;