import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project Manager",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc:"It's a project where I leverage Node.js and Express.js frameworks along with MongoDB for the backend. For the frontend, I use Handlebars and vanilla JavaScript to create a web application with an admin panel. In this app, the admin assigns projects to each user, and users can view and manage their assigned projects. There's also a daily task manager with CRUD functionality for users, along with a messaging feature allowing users to communicate with the admin"
  },
  {
    id: 2,
    title: "Quiz App",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "It's a fundamental quiz app built with React, featuring basic questions. The application utilizes React Redux Toolkit for state management and Toast for notifications. The core principles include leveraging Redux for handling next and previous functionality and utilizing useContext to display the username for the player."
  },
  {
    id: 3,
    title: "Engeneering website ",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This is a representative website for our Ensem Engineering Club. I created it using the Bootstrap framework, along with CSS and HTML, to showcase the club online. The website provides information about our club's activities, achievements"
  },
  {
    id: 4,
    title: "My portfolio ",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This is my portfolio website, crafted to showcase my skills, services, and personal identity and projects . Developed using React.js with native CSS for design, it incorporates engaging animations through Framer Motion."
  },
  {
    id: 5,
    title: "Blog webite  ",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "This is a MERN stack application designed for sharing IT blogs and news. Built with React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database, the platform offers a seamless experience for users to explore and contribute to the latest happenings in the IT world."
  },
  {
    id: 6,
    title: "E-learning website ",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "This is a full-stack application featuring Java Spring for the backend and React for the frontend, serving as a compact e-learning platform. With a blend of robust server-side functionality and dynamic user interfaces, it provides a seamless experience for learners. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Projects" >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
            <button>See Demo</button>
            <button>See code</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  return (
    <div className="project" ref={ref}>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;