import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Developing Front-End Apps with React",
    desc:"The project utilizes Node.js and Express.js frameworks for the backend, incorporating MongoDB for data storage. For the frontend, Handlebars and vanilla JavaScript are employed to craft a user-friendly web application alongside an admin panel. Admins assign projects to users who can efficiently manage their tasks. Additionally, a daily task manager with CRUD functionality is implemented for users. To facilitate communication, a messaging feature connects users with the admin. Leveraging Git for version control, changes are tracked, and the project is deployed on Render as a SaaS solution. MongoDB Atlas is chosen as the cloud platform for database management, ensuring scalability and reliability.",
    links:["https://coursera.org/share/08aec6f20beb0625e588b09cfd007bef"],
    from:"Coursera (IBM)"
  },
  {
    id: 2,
    title: "Developing Back-End Apps with Node.js and Express",
    desc: "In this training, I honed my skills in developing interactive user interfaces (UIs) and web applications using React, JSX, and ES6, enabling me to build dynamic websites and front-end applications swiftly through reusable React components. Additionally, I learned to effectively communicate and exchange data with external services using HTTP methods such as GET, POST, UPDATE, and DELETE requests. Furthermore, I gained proficiency in employing various React concepts and features, including props, states, hooks, forms, and Redux, enhancing my ability to create robust and efficient applications.",
    links:['https://coursera.org/share/b025f8ddca696d82e1b737480c82b769'],
    from:"Coursera (IBM)"
  },
  {
    id: 3,
    title: " Introduction to Cloud Computing",
    desc:  "In this course, I learned the fundamental concepts of cloud computing, including its definition, essential characteristics, historical context, and the business rationale behind its adoption. We explored emerging technologies facilitated by cloud computing and delved into cloud service models such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), alongside cloud deployment models including Public, Private, and Hybrid clouds. Additionally, I gained insights into emerging trends like Hybrid Multicloud, Microservices, Serverless, Cloud Native, DevOps, and Application Modernization. Moreover, the course provided an overview of services offered by prominent cloud platforms such as AWS, Microsoft Azure, Google Cloud, IBM Cloud, Alibaba Cloud, and others, empowering me to navigate the diverse landscape of cloud computing effectively.",
    links:['https://coursera.org/share/0220ec27cc532a8d6e3c1b890061c0f7'],
    from:"Coursera (IBM)"
  },
  {
    id: 4,
    title: "AWS Cloud Technical Essentials",
    desc: "In this role, I developed the ability to understand and translate business goals and drivers into suitable technical solutions, providing valuable technical direction and oversight to cloud implementation teams. I also specialized in creating conceptual, logical, and physical designs for cloud-based solutions for both infrastructure and platforms. Additionally, I learned to effectively gather technical requirements, assess client capabilities, and analyze findings to deliver appropriate cloud solution recommendations, ensuring alignment with organizational objectives.",
    links:['https://coursera.org/share/0220ec27cc532a8d6e3c1b890061c0'],
    from:"Coursera (AWS)"
  },
  {
    id: 5,
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    desc: "Through this training, I acquired the expertise to utilize containers for swiftly migrating applications across diverse environments. I developed proficiency in building cloud-native applications employing tools like Docker, Kubernetes, OpenShift, and Istio. Furthermore, I gained insights into leveraging Kubernetes architecture to establish and operate a comprehensive container management system based on the entire lifecycle. Additionally, I learned to create and utilize YAML deployment files to configure and generate resources such as pods, services, and replicasets in a declarative manner, optimizing efficiency and scalability in application deployment.",
    links:['https://coursera.org/share/0220ec27cc532a8d6e3c1b890061c'],
    from:"Coursera (IBM)"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
<section id="Projects">
  <div className="container">
    <div className="wrapper">
      <motion.div className="textContainer" style={{ y }} ref={ref}>
        <h2>{item.title}</h2>
        <p>{item.from}</p>
        <p>{item.desc}</p>
        <div className="buttonContainer">
          <button><a href={item.links[0]}>See Demo</a></button>
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