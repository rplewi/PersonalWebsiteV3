import {FaEnvelope} from "react-icons/fa6";
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"


export default function Contact(){
    const ref = useRef(null)
    
    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: 200})
        }
    }, [])

    return (
        <div ref = {ref} className = " w-full h-60 flex flex-col justify-center items-center gap-4 text-white">
            <a href = "mailto:rlewi0506@gmail.com">
                <button className = " p-3 justify-center items-center flex gap-2 border-2 border-color4 rounded-2xl hover:text-white hover:bg-color4 hover:">Contact <FaEnvelope size = "40"/></button>
            </a>
            <h/> Please feel free to contact me about an internship/ work opportunities, I am always looking to further my experience! 
            
        </div>
    )
}