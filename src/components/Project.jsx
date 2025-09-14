import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import {FaGithub} from "react-icons/fa6"
``

export default function Project({name, desc, delay, githubLink, languages}){
    const ref = useRef(null)
    const link = githubLink

    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: delay})
        }
    }, [])

    return (
        <div ref = {ref}>
            <div className = "h-auto w-auto bg-color4 p-6 rounded-2xl text-color2 hover:-translate-y-2 flex flex-col justify-between font-rubik">
                <p className = "text-2xl font-bold italic">{name}</p>
                <p> {desc} </p>
                <a className = "h-14 w-14" href={githubLink}>
                    <button ><FaGithub className = "hover:text-white "size = "50" /></button>
                </a>
                <p className = "text-2xl text-white">Technologies: {languages}</p>
            </div>   
        </div>
    )
}
