import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

const ScrollRevealTest = () => {
    const ref = useRef(null)

    useEffect(() => {
        const sr = ScrollReveal()
        if (ref.current) {
            sr.reveal(ref.current, {delay: 500})
        }
    }, [])

    return (
        <div ref={ref} className = "reveal technical-skills flex flex-row px-14 py-96 justify-center justify-items-center">
            <img className = "h-80 w-60 rounded-xl px-4"src = "Photos/SLARPJUICE.JPG" alt="Loganguskahn"></img>
            <div className="flex flex-row p-5 text-color3 bg-color4 w-80 h-90 rounded-xl">
                Put a list here of all my languages
            </div>
        </div>
    )
}

export default ScrollRevealTest