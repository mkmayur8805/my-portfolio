import { useState } from "react"
import Home from "./pages/Home"
import Main1 from "./pages/MaintenancePage"
import MaintenancePage from "./pages/MaintenancePage"
import Navbar from "../src/Components/Navbar"

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
    admin ? <div className="bg-grid min-h-screen" >
      <Navbar menu={menu} />
      <Home menu={menu} />
    </div> : <MaintenancePage setAdmin={setAdmin} />



  )
}

export default App
