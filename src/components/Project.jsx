import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import {FaGithub} from "react-icons/fa6"
``

export default function Project({name, desc, delay, height, width, githubLink, languages}){
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
        <div style = {{height:height, width: width}} className = "bg-color4 p-6 rounded-2xl text-color2 hover:-translate-y-2 flex flex-col">
            <h className = "text-2xl border">{name}</h>
            <p> {desc} </p>
            <a className = "border h-14 w-14" href="githubLink">
                <button ><FaGithub className = "hover:text-white "size = "50"/></button>
            </a>
            
        </div>   
        <h className = "text-3xl text-white ">Languages: {languages}</h>
        </div>
    )
}
