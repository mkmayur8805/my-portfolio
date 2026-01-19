import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState: {
        isOpen: false,
        MenuItems: [
            { item: "Home" ,link:'/'},
            { item: "About",onclick:()=> scrollToSection('about'),link:'/#about' },
            { item: "Skills",link:'/#skills' },
            { item: "Services",link:'/#services' },
            { item: "Portfolio",link:'/#portfolio' },
            { item: "Testimonials",link:'/#testimonials' },
            { item: "Contact",link:'/contact' }]
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