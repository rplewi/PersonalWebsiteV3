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
            <div className = "h-auto w-auto bg-color4 pt-2 pl-4 pr-4 pb-6 rounded-2xl text-color2 hover:-translate-y-2 flex flex-col justify-between font-rubik">
                <div className = "text-2xl font-bold italic flex flex-row pb-3 justify-between items-center">
                    <p >{name}</p>
                        <a href={githubLink}><FaGithub className = "hover:text-white "size = "50" /></a>
                    </div>
                    <p> {desc} </p>
                <div className = "text-xl pt-2 text-gray-600 flex flex-row gap-4">
                    {languages.map((tech, index) =>(
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>   
        </div>
    )
}
