import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project Manager",
    img: "/projectmanager.png",
    desc:"The project utilizes Node.js and Express.js frameworks for the backend, incorporating MongoDB for data storage. For the frontend, Handlebars and vanilla JavaScript are employed to craft a user-friendly web application alongside an admin panel. Admins assign projects to users who can efficiently manage their tasks. Additionally, a daily task manager with CRUD functionality is implemented for users. To facilitate communication, a messaging feature connects users with the admin. Leveraging Git for version control, changes are tracked, and the project is deployed on Render as a SaaS solution. MongoDB Atlas is chosen as the cloud platform for database management, ensuring scalability and reliability.",
    links:["https://projectmanager-cj90.onrender.com/",'https://github.com/btissam19/projectManager']
  },
  {
    id: 2,
    title: "Quiz App",
    img: "/quizapp.png",
    desc: "It's a fundamental quiz app built with React, featuring basic questions. The application utilizes React Redux Toolkit for state management and Toast for notifications. The core principles include leveraging Redux for handling next and previous functionality and utilizing useContext to display the username for the player.",
    links:['https://quiz-app-10-react-question.netlify.app/','https://github.com/btissam19/react-quiz-application']
  },
  {
    id: 3,
    title: "Workshop ",
    img: "/workshop.png",
    desc:  "The website represents the next-gen in data engineering, DevOps, and DataOps events organized by a research laboratory using Bootstrap framework  and JavaScript.",
    links:['https://dataops-devops-workshop.netlify.app/','https://github.com/btissam19/devops-dataops-workshop']
  },
  {
    id: 4,
    title: "My portfolio ",
    img: "/portfolio.png",
    desc: "This is my portfolio website, crafted to showcase my skills, services, and personal identity and projects . Developed using React.js with native CSS for design, it incorporates engaging animations through Framer Motion.",
    links:['/','https://github.com/btissam19/ibtissamPortfolio']
  },
  {
    id: 5,
    title: "Btissam's Blog  ",
    img: "/blog.png",
    desc: "This MERN stack application is tailored for sharing IT blogs and news, providing users with an intuitive platform to engage with the latest in the IT world. Utilizing React.js for the frontend and Node.js with Express.js for the backend, Mongodb for t database, MongoDB Atlas is employed as the cloud platform for managing the database, ensuring reliability and scalability. User authentication is seamlessly managed through standard authentication and Google OAuth via Firebase. Git tracks changes for version control, while Render serves as the SaaS platform for efficient deployment, ensuring optimal performance.",
    links:['https://btissamsblog.onrender.com/','https://github.com/btissam19/mern-blog']
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
            <button><a href={item.links[0]} >See Demo</a ></button>
            <button><a href={item.links[1]}>See code</a ></button>
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