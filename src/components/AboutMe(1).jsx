import { motion } from "framer-motion"

const AboutMe = () => {
  
    return (

            <div className="about-me-sec w-screen h-screen  mx-screen bg-color3 flex flex-col  overflow-x-hidden"> {/** Overflow x hides the ability to scroll on the x-axis */}
                
                <div className = "reveal technical-skills flex flex-row px-14 py-96 justify-center justify-items-center">
                    <img className = "h-80 w-60 rounded-xl px-4"src = "Photos/SLARPJUICE.JPG" alt="Loganguskahn"></img>
                    <p className="flex flex-row p-5 text-color3 bg-color4 w-80 h-90 rounded-xl">Technical skills</p>
                </div>
                
                <div className = "projects flex flex-row px-14 py-96 justify-center justify-items-center"> {/** Using the scale = {{ x: 100}} is making some weird offset with motion, need to fix that later.*/}
                    <img className = "h-80 w-60 rounded-xl px-4"src = "Photos/SLARPJUICE.JPG" alt="Loganguskahn"></img>
                    <p className="flex flex-row p-5 text-color3 bg-color4 w-80 h-90 rounded-xl">Projects</p>
                </div>
                
            </div>   
    )
}


export default AboutMe;