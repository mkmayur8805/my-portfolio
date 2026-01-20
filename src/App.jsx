import { useState } from "react"
import Home from "./pages/Home"
import Contactpage from "./pages/Contactpage"
import Navbar from "../src/Components/Navbar"
import Menu from "./Components/Menu"
import Portfolio from "./pages/Portfolio"
import { Route, Routes } from "react-router-dom"
import ProjectDetails from "./pages/ProjectDetails"
import Cursor from "./Components/Cursor"
function App() {

  return (
    
    <div className="bg-grid min-h-screen cursor-default select-none" >
      <Navbar />
      <Menu/>
      <Cursor />
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<ProjectDetails />} />
      </Routes>
    </div>



  )
}

export default App
