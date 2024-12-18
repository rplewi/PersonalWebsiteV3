import { FaLinkedin, FaGithub, FaEnvelope, FaSheetPlastic } from "react-icons/fa6"; // Make sure you are installing the icons library in the terminal or else it wont work.
import { motion } from "motion/react"


const NavBar = () => {
    return(
        <div className = "fixed top-0 h-16 w-screen m-0 flex flex-row justify-center items-center bg-color4 text-blue-500 shadow-lg"> {/** bg-gray-900 put color back to the navbar*/}
            <NavBarIcon icon = {<FaLinkedin size="30"/>} text='LinkedIn'/>
            <NavBarIcon icon = {<FaGithub size="30"/>} text='GitHub'/>
            <NavBarIcon icon = {<FaEnvelope size="30"/>} text='Contact'/>
            <NavBarIcon icon = {<FaSheetPlastic size="30"/>} text='Resume'/> 
        </div>
    )
}

const NavBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className = "navbar-icon group">
        {icon}
        <span class = "navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default NavBar;