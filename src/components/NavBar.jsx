import { FaLinkedin, FaGithub, FaEnvelope, FaSheetPlastic } from "react-icons/fa6"; // Make sure you are installing the icons library in the terminal or else it wont work.
import { useState, useEffect } from "react";
import * as React from "react";
import {motion} from "motion/react"
import {useRef} from 'react';



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
            <NavBarIcon icon = {<FaLinkedin size="30"/>} text='LinkedIn' delayNum=".1" link="https://www.linkedin.com/in/romanplewis/"/>
            <NavBarIcon icon = {<FaGithub size="30"/>} text='GitHub' delayNum=".3" link="https://github.com/rplewi"/>
            <NavBarIcon icon = {<FaEnvelope size="30"/>} text='Contact' delayNum=".5" link="mailto:rlewi0506@gmail.com"/>
            <NavBarIcon icon = {<FaSheetPlastic size="30"/>} text='Resume' delayNum=".7" link="Resume/Resume2.pdf"/> 
        </div>
    )
}

const NavBarIcon = ({ icon, text = 'tooltip' , delayNum, keyID, link}) => (
            <motion.div initial={{y:-50}} animate={{y:0}} transition={{delay:delayNum, duration:.09}} className = "navbar-icon " key={`first-div-${keyID}`}>
                <a href={link} target="_blank" className="navbar-icon group">
                        {icon}
                    <span className = "navbar-tooltip group-hover:scale-100">
                        {text}
                    </span>
                </a>
            </motion.div>
);
export default NavBar;