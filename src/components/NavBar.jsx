import { FaLinkedin, FaGithub, FaEnvelope, FaSheetPlastic } from "react-icons/fa6"; // Make sure you are installing the icons library in the terminal or else it wont work.

import * as React from "react";
import {motion, useTime, useTransform} from "motion/react";
import {animate} from "motion";
import {transition} from "react";



const NavBar = () => {

    return(
        <div className = "fixed top-0 h-16 w-screen z-10 flex flex-row  items-center bg-color4 text-blue-500 shadow-xl"> 
            <NavBarIcon icon = {<FaLinkedin size="30"/>} text='LinkedIn'/>
            <NavBarIcon icon = {<FaGithub size="30"/>} text='GitHub' animation="trans-down"/>
            <NavBarIcon icon = {<FaEnvelope size="30"/>} text='Contact'/>
            <NavBarIcon icon = {<FaSheetPlastic size="30"/>} text='Resume'/> 
        </div>
    )
}

const NavBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className = "navbar-icon group">
        {icon}
        <span className = "navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default NavBar;