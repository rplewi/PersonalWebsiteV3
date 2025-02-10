import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import {motion} from "motion/react"

const ScrollRevealTest = () => {
    const ref = useRef(null)

    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: 500})
        }
    }, [])

    return (
        <div ref={ref} className = "flex flex-row py-40 border justify-center justify-items-center">
            <motion.div whileHover = {{scale:1.1}} initial={{x:-800}} animate={{x:0}} transition={{delay:3}} className = "h-auto w-auto p-4 border-4 border-color4 rounded-xl gap-5 justify-items-center">
                <img className = "h-70 w-96"src = "Photos/Me.jpg" alt="Photo"/>{/** Need a horizontal photo of myself to put here instead of logan*/}
            </motion.div>
            <div className="p-8"/>
            <motion.div whileHover = {{scale:1.1, border: 4}} className = "flex flex-row p-5 text-color2 bg-color4 w-2/6 rounded-xl font-rubik">
                    Hey there! My name is Roman Lewis, I am currently a student at Lewis University and studying to be a software engineer! (FINISH) ALSO GET A BETTER PHOTO
            </motion.div>
        </div>
    )
}

export default ScrollRevealTest