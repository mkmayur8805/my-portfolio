import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
const store = configureStore({
    reducer: {
        MenuSlice: MenuSlice
    },
})

export default store;