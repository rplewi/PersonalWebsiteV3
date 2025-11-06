import Project from "./Project"

const Projects = () => {
    
    return (
        <div className = "pt-20 w-full h-full flex flex-col items-center">
            <div className = "flex justify-center items-center text-color2 bg-color4 rounded-2xl p-6 text-center text-6xl font-rubik italic">Projects</div>
            <div className = "pt-10 pb-20 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
                    <div className = "row-span-2 ">
                        <Project languages = {['Tailwind CSS', 'React']} name = {"My Personal Website"} githubLink={"https://github.com/rplewi/PersonalWebsiteV3"} desc = {"This is the second iteration of my personal website, I focused this time on enhancing design and user experience to better highlight my skills and development."} delay = {500}/>
                    </div>
                    <div className = "row-span-2">
                        <Project languages = {['Java']} githubLink = {"https://github.com/rplewi/lewis_cpsc24500/tree/main/StoryTeller"} name = {"Story Teller"} desc =
                        {"Developed as the final project in my Object-Oriented Programming class, Story Teller demonstrates the key concepts and techniques I learned throughout the course in a fun and engaging application."} 
                        delay = {700} />
                    </div>
                    <div className = "row-span-2">
                        <Project languages = {['Java']} githubLink = 
                        {"https://github.com/rplewi/Algorithm-Visualizer"} 
                        name = {"Algorithm Visualizer"}
                        desc = {"A Java GUI project that contains a variety of sorting algorithms"} 
                        delay = {900}/>
                    </div>
                    <div className="row-span-2">
                        <Project languages = {['Next.JS', 'MongoDB', 'Python', 'TypeScript']} 
                        githubLink={"https://www.chattynotes.io/"} name={"ChattyNotes"} 
                        desc={"This application leverages AI to help users take notes, by doing so, the user is better able to retrieve information and create actionable items from meetings/ documents."} delay={1000}></Project>
                    </div>
            </div>
        </div>
    )
}

export default Projects