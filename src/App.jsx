import { useState , useEffect } from "react";
import "./App.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/SkillsDesktop";
import SkillsMobile from "./components/skills/skillsMobile";
import ServicesMobile from "./components/services/ServicesMobile";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Certification from "./components/certifications/Certification";
import Contact from "./components/contact/Contact";
import ContactMobil from "./components/contact/ContactMobil";
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return(
  <div>
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
        <section >
          <Parallax text="What We Know?"  type=" javascript, react.js Node.js express.js Mongodb java Mysql" link="Skills"/>
        </section> 
        <section id="Skills">
        {isMobile?<SkillsMobile/>:<Skills/>}
        </section>
        <section >
          <Parallax text="What We Do?"  type="web development ,Graphic Design Design Thinking" link="Services"/>
        </section>
       <section id="Services"> 
           {isMobile?<ServicesMobile/>:<Services/>}  
      </section> 
        <section > 
        <Parallax text="What We Did?" type=" manager blog portfolio quiz " link="Projects"/>
        </section>
         <Projects/> 
         <section > 
        <Parallax text="I am certified in!" type=" react cloud node.js " link="certifications"/>
        </section>
         <Certification />   
         <section id="Contact">
        {isMobile ?<ContactMobil/>: <Contact/>}
        </section>  
  </div>);
};

export default App;
