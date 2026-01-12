import { useState } from "react"
import Home from "./pages/Home"
import Main1 from "./pages/MaintenancePage"
import MaintenancePage from "./pages/MaintenancePage"
import Navbar from "../src/Components/Navbar"

function App() {
  const [admin, setAdmin] = useState(true)
  const [menu, setMenu] = useState([
    { item: "Home", isopen: true },
    { item: "About", isopen: false },
    { item: "Experience", isopen: false },
    { item: "Projects", isopen: false },
    { item: "Contact", isopen: false }])
  return (
    admin ? <div className="bg-grid min-h-screen" >
      <Navbar menu={menu} setMenu={setMenu} />
      <Home />
    </div> : <MaintenancePage setAdmin={setAdmin} />



  )
}

export default App
