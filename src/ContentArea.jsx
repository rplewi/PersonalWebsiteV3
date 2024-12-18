import { motion } from "motion/react"


const ContentArea = () => {
    return (
        <div className="m-12">
            <motion.div className = "about-me" animate={{x:100}}/>
        </div>
    )
}
const AboutMe = () => {
    return (
        <div className = ""></div>
    )
}
export default ContentArea;