import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import {motion} from "motion/react"

export default function Intro({}){
    const ref = useRef(null)
    var delay;
   
    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: 400})
        }
    }, [])
    return (
        <div className = "  flex p-60 pb-96 justify-center h-full w-full ">
            <div className = "text-white font-rubik">
                <motion.div initial={{y:-400}} animate={{y:0}} transition={{delay:1.4}} className = "text-6xl ">Hey There!</motion.div>
                <motion.div initial={{x:-600, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.8}} className = "pt-2"> My Name is,</motion.div>
                <motion.div initial={{y:600, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:2.2}} className = "text-8xl text-color4 ">Roman Lewis</motion.div>
                <motion.div initial={{x:1200, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:2.6}} className = "text-white " >Sophomore at Lewis University studying computer science.</motion.div>
            </div>
        </div>
    )
}


