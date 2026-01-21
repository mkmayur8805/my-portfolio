import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import ProjectsSlice from "./ProjectsSlice";
import ServicesSlice from "./ServicesSlice";
import TestimonialsSlice from "./TestimonialsSlice";
const store = configureStore({
    reducer: {
        MenuSlice: MenuSlice,
        ProjectsSlice: ProjectsSlice,
        ServicesSlice: ServicesSlice,
        TestimonialsSlice: TestimonialsSlice
    },
})

export default store;