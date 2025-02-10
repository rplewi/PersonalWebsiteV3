import Classes from "./Classes.jsx"


const TechnicalSkills = () => {

    return (
        <div className = "technical-skills flex flex-row justify-center px-14 pt-12 pb-40">
            
            <div className = "p-5 flex flex-row text-color3 bg-color4">
                    <h className = "text-3xl p-4 text-color2">Relevant Coursework</h>
                        <ul class="space-y-6 text-left text-gray-500 dark:text-gray-400">
                            <Classes name = {"Object Oriented Programming"} delay = {600}/>
                            <Classes name = {"Software Engineering (Current)"} delay = {700}/>
                            <Classes name = {"Programming Fundamentals"} delay = {800}/>
                            <Classes name = {"Algorithms and Data Structures"} delay = {900}/>
                        </ul>

            </div>
        </div>
    )
}

export default TechnicalSkills