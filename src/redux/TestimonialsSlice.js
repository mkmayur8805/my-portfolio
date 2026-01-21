import { createSlice } from "@reduxjs/toolkit";
import adityaimg from "../assets/testimonials/aditya.jpg"

const TestimonialsSlice = createSlice({
    name: "TestimonialsSlice",
    initialState: [
        {
            name: "Prasad Patil",
            img: "",
            stars: 5,
            title: "CEO",
            feedback: "Mayur designed our corporate website from scratch, integrating real-time product updates and custom analytics. The result perfectly matched our brand identity, and the launch was seamless. The interactive dashboard is a game-changer for our team."
        }
        ,
        {
            name: "Anjali Sharma",
            img: "",
            stars: 4,
            title: "Project Manager",
            feedback: "Mayur created a responsive project management portal for us. His custom forms and automated task notifications helped our team save hours every week. The design is clean and intuitive, exactly what we needed."
        }
        ,
        {
            name: "Aditya Suryawanshi",
            img: adityaimg,
            stars: 5,
            title: "Entrepreneur",
            feedback: "Mayur built my e-commerce site with custom payment gateways and inventory management. The checkout process is smooth, and the mobile version is flawless. His support during launch was outstanding."
        }
        ,
        {
            name: "Sneha Kulkarni",
            img: "",
            stars: 4,
            title: "Marketing Head",
            feedback: "Mayur developed our campaign landing pages with integrated analytics. The pages load fast, look vibrant, and helped increase sign-ups by 30%. He really understood our marketing goals."
        }

    ],
    reducers: {}
})
export const { } = TestimonialsSlice.actions;
export default TestimonialsSlice.reducer;