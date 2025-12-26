import { useState } from "react"
import Home from "./pages/Home"

function App() {
  const [menu, setMenu] = useState([{item:"Home",isopen: false }, 
    {item:"About",isopen: false },
    {item:"Experience",isopen: false }, 
    {item:"Projects",isopen: false }, 
    {item:"Contact",isopen: false }])
  return (
    <div className="bg-zinc-950">
      <Home menu={menu} />
    </div>
    
  )
}

export default App
