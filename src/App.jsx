import "./App.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
const App = () => {
  return(<div>
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
        <section id="Skills">
          <Parallax text="What We Know?"  type=" javascript, react.js Node.js express.js Mongodb java Mysql"/>
        </section> 
        <section>
        <Skills/>
        </section>
        <section id="services">
          <Parallax text="What We Do?"  type="web development ,Graphic Design Design Thinking"/>
        </section>
       <section> 
        <Services/>
        </section> 
        <section id="Projects"> 
        <Parallax text="What We Did?" type=" manager blog portfolio  shopping Cart "/>
        </section> 
       <Projects/> 
      <section id="Resume">
          <Contact/>
      </section>  
  </div>);
};

export default App;
