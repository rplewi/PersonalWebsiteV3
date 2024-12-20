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
        <div ref = {ref} className = "about-me flex flex-row py-96 justify-center justify-items-center">
            <img className = "h-80 w-60 rounded-xl px-4"src = "Photos/SLARPJUICE.JPG" alt="Loganguskahn"></img> {/** Fix the rounded later, it has something to do with rounding and padding-x for some reason.*/}
            <p className="flex flex-row p-5 text-color3 bg-color4 w-80 h-90 rounded-xl">Some random bullshit about my life i guess can expand this thing later.</p>
        </div>
    )
}

export default ScrollRevealTest