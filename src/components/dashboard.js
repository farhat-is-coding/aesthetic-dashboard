import "../styles/dashboard.css"
import Sidebar from "./sidebar"
import Mainpanel from "./mainpanel"

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Mainpanel />

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
