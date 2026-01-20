import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState: {
        isOpen: false,
        MenuItems: [
            { item: "Home", type: "section", target: "hero" },
            { item: "About", type: "section", target: "about" },
            { item: "Skills", type: "section", target: "skills" },
            { item: "Services", type: "section", target: "services" },
            { item: "Portfolio", type: "route", path: "/portfolio" },
            { item: "Testimonials", type: "section", target: "testimonials" },
            { item: "Contact", type: "route", path: "/contact" }]
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