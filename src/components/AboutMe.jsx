import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import {motion} from "motion/react"
import { aboutMeText } from "../text/aboutMeText.jsx"
import mePicture from "/Photos/Me.jpeg"

const ScrollRevealTest = () => {
    const ref = useRef(null)

    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: 500})
        }
    }, [])
    

    return (
        <div ref={ref} className = "flex flex-col md:flex-row py-40 justify-center items-center gap-4 md:gap-2">
            <motion.div whileHover = {{scale:1.1}} initial={{x:-1200}} animate={{x:0}} transition={{delay:3}} className = "h-max w-max p-4 border-4 border-color4 rounded-xl gap-5 justify-items-center">
                <img className = "w-40 rounded-lg sm:w-48 md:w-72 lg:w-96" src = {mePicture || "Photos/.jpeg"} alt="me"/>
            </motion.div>
            <div className="p-8"/>
            <motion.div whileHover = {{scale:1.1, border: 4}} initial={{x:1200}} animate={{x:0}} transition={{delay:3}} className = "flex flex-row p-5 text-color2 bg-color4 md:w-2/6 w-full rounded-xl font-rubik text-sm sm:text-base md:text-lg">
                {aboutMeText}
            </motion.div>
        </div>
    )
}

export default ScrollRevealTest