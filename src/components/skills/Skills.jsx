import { useRef } from "react";
import "./skills.scss"
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const skills = [
    {
        id: 1,
        category: "Frontend",
        skill: ["CSS", "Bootstrap", "Tailwind CSS", " Framer Motion ", "JavaScript", "React"],
        images:['/css.jpg','/botstrape.jpg','/tailwind.jpg','/framer.png','/javascript.png','/react.png']
    },
    {
        id: 2,
        category: "Backend",
        skill: ["Node.js", "Express.js", "Java", "Spring", "MongoDB", "MySQL"],
        images:['/node.png','/express.png','/java.png','/spring.png','/mongodb.png','/mysql.png']
    },
    {
        id: 3,
        category: "Tools",
        skill: ["Git", "Docker", "Figma", "UML", "Postman", "VS Code"],
        images:['/git.png','/docker.png','/figma.png','/uml.png','/postman.png','/vscode.jpg']
    },
    {
        id: 4,
        category: "Others",
        skill: ["C","C++", "Python", "Sass", "TypeScript", "Linux"],
        images:['/c.png','/cpp.png','/python.jpg','/sass.png','/typescript.png','/linux.jpg']
    },
];


  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView &&"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I focus on learning everything that helps me in
          <br />  software development
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
        <img src="/tech.png" alt="" />
          <h1>
          Just<motion.b whileHover={{color:"#ef8ba2"}}> New </motion.b> 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#ef8ba2"}}> Technologies </motion.b> in IT.
          </h1>
          <button>WHAT WE Know?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>

        { skills.map((item )=>(
             <motion.ul 
             key={item.id}
             className="boxskills"
             whileHover={{ background: "pink", color: "#073763" }}
           >
            {/* { background: "#ef8ba2", color: "#073763" } */}
   
             <h2>{item.category}</h2>
             <li>
             <img src={item.images[0]} alt={item.images[0]} />{item.skill[0]}
             </li>
             <li>
             <img src={item.images[1]} alt={item.images[1]} />{item.skill[1]}
             </li>
             <li>
             <img src={item.images[2]} alt={item.images[2]} /> {item.skill[2]}
             </li>
             <li>
             <img src={item.images[3]} alt={item.images[3]} />{item.skill[3]}
             </li>
             <li>
             <img src={item.images[4]} alt={item.images[4]} />{item.skill[4]}
             </li>
             <li>
             <img src={item.images[5]} alt={item.images[5]} />{item.skill[5]}
             </li>
           </motion.ul>
            
            ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;