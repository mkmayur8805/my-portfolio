import { useState } from "react"
import Home from "./pages/Home"
import Contactpage from "./pages/Contactpage"
import Navbar from "../src/Components/Navbar"
import Menu from "./Components/Menu"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    
    <div className="bg-grid min-h-screen cursor-default select-none" >
      <Navbar />
      <Menu/>
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>



  )
}

export default App
