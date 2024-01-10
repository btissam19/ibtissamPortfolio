import React from 'react';
import { useRef } from 'react';
import './skillsMobile.scss'

const Skills = () => {
  const ref = useRef();

  const skills = [
    {
      id: 1,
      category: 'Frontend',
      skill: ['CSS', 'Bootstrap', 'Tailwind CSS', ' Framer Motion ', 'JavaScript', 'React'],
      images: ['/css.jpg', '/botstrape.jpg', '/tailwind.jpg', '/framer.png', '/javascript.png', '/react.png'],
    },
    {
      id: 2,
      category: 'Backend',
      skill: ['Node.js', 'Express.js', 'Java', 'Spring', 'MongoDB', 'MySQL'],
      images: ['/node.png', '/express.png', '/java.png', '/spring.png', '/mongodb.png', '/mysql.png'],
    },
    {
      id: 3,
      category: 'Tools',
      skill: ['Git', 'Docker', 'Figma', 'UML', 'Postman', 'VS Code'],
      images: ['/git.png', '/docker.png', '/figma.jpg', '/uml.png', '/postman.png', '/vscode.jpg'],
    },
    {
      id: 4,
      category: 'Others',
      skill: ['C', 'C++', 'Python', 'Sass', 'TypeScript', 'Linux'],
      images: ['/c.png', '/cpp.png', '/python.jpg', '/sass.png', '/typescript.png', '/linux.jpg'],
    },
  ];

  return (
    <div className="skills" ref={ref}>
      <div className="titleContainer">
        <div className="title">
          <img src="/tech.png" alt="" />
          <h1>Just New </h1>
        </div>
        <div className="title">
          <h1> Technologies in IT.</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {skills.map((item) => (
            <div className="col-md-6 col-lg-3 col-sm-6 col-10" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h2>{item.category}</h2>
                  <ul className="boxskills">
                    {item.skill.map((skill, index) => (
                      <li key={index}>
                        <img src={item.images[index]} alt={item.images[index]} />
                        {skill}
                      </li>
                    ))}
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

export default Skills;
