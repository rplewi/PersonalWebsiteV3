import './App.css'
import { motion } from "motion/react"
import SideBar from "./NavBar.jsx"; // MAKE SURE YOU ARE SPECIFYING YOUR IMPORT FILE TYPES OR ELSE IT WILL NOT WORK!!!!!!!!
import ContentArea from "./ContentArea.jsx";



function App() {
  return ( 
      <div className = "flex bg-color1 h-screen w-screen">
          <SideBar/>
          <div className = "flex flex-row bg-color1 h-15 w-15 p-15"/>
          <div className = "flex flex-row bg-color2 h-15 w-15 p-15"/>
          <div className = "flex flex-row bg-color3 h-15 w-15 p-15"/>
          <div className = "flex flex-row bg-color4 h-15 w-15 p-15"/>
          <ContentArea/>
      </div>
  );
}

const NavBarIcon = ({ icon}) => (
  <div className = "sidebar-icon">
    {icon}
  </div>
)

export default App
