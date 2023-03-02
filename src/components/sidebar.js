import "../styles/sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouseChimney,
  faTrophy,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="column">
        <div className="logo">
          {" "}
          {/* <img src="https://i.pinimg.com/originals/e8/59/9d/e8599dbc522559d0f13dbd96c4be6348.png" alt="" /> */}
        </div>
        <ul className="side-bar-list">
          <li>
            <FontAwesomeIcon icon={faHouseChimney} /> Dashboard
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faTrophy} /> Feats
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} /> Favorites
          </li>
        </ul>
        <div className="banner">
          <div className="header-text">
            <h3 className="bg-shade">Contact me</h3>
          </div>
          {/* <div></div> */}
        </div>
        <div className="logout-btn">
          <button className="btn-grad">Logout</button>
        </div>
      </div>
    </div>
  )
}
