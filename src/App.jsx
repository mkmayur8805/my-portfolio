import { useState } from "react"
import Home from "./pages/Home"
import Main1 from "./pages/MaintenancePage"
import MaintenancePage from "./pages/MaintenancePage"
import Navbar from "../src/Components/Navbar"
import Menu from "./Components/Menu"

function App() {
  const [admin, setAdmin] = useState(true)
  const menu = [
    { item: "Home"},
    { item: "About"},
    { item: "Skills"},
    { item: "Services"},
    { item: "Portfolio"},
    { item: "Testimonials"},
    { item: "Contact"}]
  return (
    admin ? <div className="bg-grid min-h-screen cursor-default select-none" >
      <Navbar menu={menu} />
      {/* <Menu menu={menu} /> */}
      <Home menu={menu} />
    </div> : <MaintenancePage setAdmin={setAdmin} />



  )
}

export default App
