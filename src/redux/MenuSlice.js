import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState: {
        isOpen: false,
        MenuItems: [
            { item: "Home" },
            { item: "About" },
            { item: "Skills" },
            { item: "Services" },
            { item: "Portfolio" },
            { item: "Testimonials" },
            { item: "Contact" }]
    },
    reducers: {
        openMenu: (state) => {
            state.isOpen = true;
            console.log("reducer openMenu working");
        },
        closeMenu: (state) => {
            state.isOpen = false;
            console.log("reducer closeMenu working");
        }
    }
})

export const { openMenu, closeMenu } = MenuSlice.actions;
export default MenuSlice.reducer;