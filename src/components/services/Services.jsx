import React, { useRef } from "react";
import "./services.scss";
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

const Services = () => {
  const ref = useRef();

  const services = [
    {
      id: 1,
      category: "Frontend",
      text:
        "Build static websites with CSS frameworks like Bootstrap or Tailwind CSS, employing semantic HTML and customization for responsiveness. Add interactivity using JavaScript. Develop dynamic websites without a database with React. Integrate Framer Motion for animations in React, with fine-tuning options.",
    },
    {
      id: 2,
      category: "Backend",
      text:
        "Highly skilled in backend API development using Node.js, Express.js, and MongoDB or MySQL, with extensive expertise. Additionally, occasionally adept at crafting APIs using Java and Spring, demonstrating proficiency in diverse technologies for comprehensive backend solutions.",
    },
    {
      id: 3,
      category: "Fullstack",
      text:
        "Proficient and expert in building full-stack web applications using the MERN stack, with advanced skills. Additionally, possess basic experience in developing full-stack apps with Java and React, ensuring a versatile approach to comprehensive web application solutions.",
    },
  ];

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView &&"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I focus on Digitizing your Business
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/web2.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color:"#ef8ba2"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
          For Your<motion.b whileHover={{ color: "#ef8ba2"}}> website</motion.b>
           
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {services.map((item) => (
          <motion.div
            key={item.id}
            className="box"
            whileHover={{ background: "pink", color: "#073763" }}
          >
            <motion.h2  whileHover={{ color: "#ef8ba2"}}>{item.category}</motion.h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
