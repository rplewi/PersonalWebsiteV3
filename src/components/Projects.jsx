import { BiFullscreen } from "react-icons/bi"
import Project from "./Project"

const Projects = () => {
    
    return (
        <div className = "pt-20 w-full h-full flex flex-col items-center">
            <div className = "flex justify-center items-center text-color2 bg-color4 rounded-2xl p-6 text-center text-6xl">Projects</div>
            <div className = " pt-10 pb-20 gap-4 grid grid-cols-2 justify-items-center ">
                    <div className = "col-span-2 ">
                    <Project languages = {"Tailwind CSS and React"}name = {"My Personal Website"} height = {200} width = {800} desc = {"This is my second iteration of my personal website, and I decided to take a deeper dive into my website and wanted to create something to display my skills!"} delay = {500}/>
                    </div>
                    <div className = "row-span-2 ">
                    <Project languages = {"Java"}githubLink = {""} name = {"Story Teller"} height = {250} width = {400} desc = {"Story Teller was the last program that I created in my Object Oriented Programming class. This program showcased all of the subjects that I learned in the class and was a very fun and interesting project! "} delay = {700} />
                    </div>
                    <div className = "row-span-2 ">
                    <Project languages = {"Java"}githubLink = {"https://github.com/rplewi/PersonalWebsiteV3"} name = {"Chamber-Traversal"} height = {250} width = {400} desc = {"This program was created in my Programming Fundamentals class using Java. This programs main concept was the use of recursion to find chambers inside of the maze that it could flood with numbers, thus ending the traversal  "} delay = {900}/>
                    </div>
            </div>
        </div>
    )
}

export default Projects