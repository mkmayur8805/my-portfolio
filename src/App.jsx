import { useState } from "react"
import Home from "./pages/Home"
import Main1 from "./pages/MaintenancePage"
import MaintenancePage from "./pages/MaintenancePage"

function App() {
  const [admin, setAdmin] = useState(false)
  const [menu, setMenu] = useState([
    {item:"Home",isopen: true }, 
    {item:"About",isopen: false },
    {item:"Experience",isopen: false }, 
    {item:"Projects",isopen: false }, 
    {item:"Contact",isopen: false }])
  return (
    admin ? <div className="bg-zinc-950">
      <Home menu={menu} setMenu={setMenu} />
    </div> : <MaintenancePage setAdmin={setAdmin} />
          
    
  
  )
}

export default App
