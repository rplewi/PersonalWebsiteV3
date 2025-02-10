import { FaLinkedin, FaGithub, FaEnvelope, FaSheetPlastic } from "react-icons/fa6"; // Make sure you are installing the icons library in the terminal or else it wont work.
import { useState, useEffect } from "react";
import * as React from "react";
import {motion} from "motion/react"



const NavBar = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [yCurrent, setYCurrent] = useState(0);
const [yPrevious, setYPrevious] = useState(0);

useEffect(() => {
    const handleScroll = () => {
    setYCurrent(window.scrollY);
    if (yCurrent > yPrevious){
        setYPrevious(yCurrent > 0 ? yCurrent : 0);
        setIsScrolled(true);
    } else {
        setYPrevious(yCurrent > 0 ? yCurrent : 0);
        setIsScrolled(false);
    }

};
window.addEventListener('scroll', handleScroll);

return () => window.removeEventListener('scroll', handleScroll);
}, [yCurrent]);
    return(
        
        <div
            className={`fixed top-0 h-16 w-screen z-10 flex flex-row overflow-hidden border-b-2 bg-color2 border-color4 text-blue-500 shadow-xl translate-x- transition-transform duration-300 ${
                isScrolled ? "-translate-y-full" : "translate-y-0"
            }`}
            yCurrent
        >
            <motion.div initial={{y:-50}} animate={{y:0}} transition={{delay:0, duration:.09}} className="round-relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto text-2xl shadow-lg bg-color2 text-color4 hover:bg-white hover:text-color2 rounded-3xl hover:rounded-xl transition-all duration-300 ease-lienar cursor-pointer">R</motion.div>
            <NavBarIcon icon = {<FaLinkedin size="30"/>} text='LinkedIn' delayNum=".1"/>
            <NavBarIcon icon = {<FaGithub size="30"/>} text='GitHub' delayNum=".3"/>
            <NavBarIcon icon = {<FaEnvelope size="30"/>} text='Contact' delayNum=".5"/>
            <NavBarIcon icon = {<FaSheetPlastic size="30"/>} text='Resume' delayNum=".7"/> 
        </div>
        
    )
}

const NavBarIcon = ({ icon, text = 'tooltip' , delayNum, keyID}) => (
    
    
    <motion.div initial={{y:-50}} animate={{y:0}} transition={{delay:delayNum, duration:.09}} className = "navbar-icon group" key={`first-div-${keyID}`}>
            {icon}
        <span className = "navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </motion.div>

);

export default NavBar;