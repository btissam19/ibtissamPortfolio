import "./App.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/Parallax";
const App = () => {
  return(<div>
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
        <section id="Skills">
          <Parallax text="What We Know?"  type=" javascript, react.js Node.js express.js Mongodb java Mysql"/>
        </section>
        <section id="Contact">skills</section> 
        <section id="services">
          <Parallax text="What We Do?"  type="web development ,Graphic Design Design Thinking"/>
          </section>
          <section id="Contact">services</section> 
        <section id="Projects"> 
        <Parallax text="What We Did?" type=" manager blog portfolio  shopping Cart "/>
        </section> 
        <section id="Contact">project</section>  
        <section id="Resume">Contact</section>  
  </div>);
};

export default App;
