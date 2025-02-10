import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"


export default function Classes({name, delay}){
    const ref = useRef(null)

    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: delay})
        }
    }, [])

    return (
        <li ref = {ref} class="flex items-center space-x-3 rtl:space-x-reverse hover:-translate-y-1">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
            </svg>
                <span className = "font-rubik text-color2">{name}</span>
        </li>
    )
}