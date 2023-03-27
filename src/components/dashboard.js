import "../styles/dashboard.css"
import Sidebar from "./sidebar"
import Mainpanel from "./mainpanel"
import { useState } from "react"

export default function Dashboard() {
  const [sidebarItem, setSidebarItem] = useState("dashboard")

  return (
    <div className="dashboard-container">
      <Sidebar sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} />
      {<Mainpanel sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} />}
      <Sidebar2 />
    </div>
  )
}

function Sidebar2() {
  return (
    <div className="side-bar2">
      <div className="side-bar2-image"></div>
    </div>
  )
}
