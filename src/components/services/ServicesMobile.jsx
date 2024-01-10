import { useRef } from 'react';
import './servicesMobile.scss'
const ServicesMobile = () => {
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
  return (
    <div className="services" ref={ref}>
      <div className="titleContainer">
        <div className="title">
          <img src="/web2.jpg"  alt="" />
          <h1>Unique Idea</h1>
        </div>
        <div className="title">
          <h1> For Your Websites.</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {services.map((item) => (
            <div className="col-md-6 col-lg-3 col-sm-6 col-10" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h2>{item.category}</h2>
                  <ul className="boxskills">
                      <li key={item.id}>
                        {item.text}
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
