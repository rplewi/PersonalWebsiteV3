import './App.css'
 // MAKE SURE YOU ARE SPECIFYING YOUR IMPORT FILE TYPES OR ELSE IT WILL NOT WORK!!!!!!!!
import AboutMe from "./components/AboutMe.jsx";
import NavBar from "./components/NavBar.jsx";
import TechSkills from "./components/TechnicalSkills.jsx";
import Projects from "./components/Projects.jsx";




function App() {
  return ( 
      <div className = " flex flex-col bg-color3 h-100vh w-100vw overflow-auto overflow-x-hidden">
            <NavBar/>
            <AboutMe/>
            <TechSkills/>
            <Projects/>

      </div>
  );
}

export default App
