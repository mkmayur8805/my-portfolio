import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState: {
        isOpen: false,
        MenuItems: [
            { item: "Home" ,onclick:()=> Navigate('/#hero')},
            { item: "About",onclick:()=> Navigate('/#about') },
            { item: "Skills",onclick:()=> Navigate('/#skills') },
            { item: "Services",onclick:()=> Navigate('/#services') },
            { item: "Portfolio",onclick:()=> Navigate('/#portfolio') },
            { item: "Testimonials",onclick:()=> Navigate('/#testimonials') },
            { item: "Contact",onclick:()=> Navigate('/#contact') }]
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