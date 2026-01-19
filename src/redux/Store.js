import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import ProjectsSlice from "./ProjectsSlice";
const store = configureStore({
    reducer: {
        MenuSlice: MenuSlice,
        ProjectsSlice: ProjectsSlice
    },
})

export default store;