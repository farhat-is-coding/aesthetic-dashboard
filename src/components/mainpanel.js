import "../styles/mainpanel.css"
import { motion } from "framer-motion"
const container = {
  hidden: { rotate: 90 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
}
const itemA = {
  hidden: { scale: 0, top: 100 },
  show: { scale: 1, top: 0 },
}
export default function Mainpanel({ sidebarItem, setSidebarItem }) {
  return (
    <motion.div
      className="main-panel"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {sidebarItem === "dashboard" && (
        <>
          <motion.div variants={container}>
            <h1 className="">I am Radcowboy</h1>
          </motion.div>
          <Row text={"Check Out my Goals. Goes Hard"} img={"itoshi2.webp"} />
          
          <motion.div variants={container}>
            <h1 className="">My Iconic Moments</h1>
            <Showcase />
          </motion.div>
         
        </>
      )}
      {sidebarItem === "feats" && (
        <motion.div className="feats-banner" variants={itemA}></motion.div>
      )}
      {sidebarItem === "favorites" && (
        <motion.div className="favorites-banner" variants={itemA}></motion.div>
      )}
    </motion.div>
  )
}

function Row({ text, img }) {
  return (
    <motion.div className="main-panel-banner" variants={itemA}>
      <div>
        <h1>{text}</h1>
        <button className="btn-grad">Check Now!</button>
      </div>
      <img src={img} alt="alt" className="main-panel-img" />
    </motion.div>
  )
}

function Showcase() {
  return (
    <div className="parent">
      <div className="child">
        <img src="isagi1.png" alt="" />
      </div>
      <div className="child">
        <img src="rin.png" alt="" />
      </div>
      <div className="child">
        <img src="isagi1.png" alt="" />
      </div>
      <div className="child">
        <img src="rin.png" alt="" />
      </div>
    </div>
  )
}
