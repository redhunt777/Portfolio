import { useState } from "react";

import "./about.scss";
import { motion } from "framer-motion";

const container = [
  {
    id: 1,
    title: "Introduction",
    description:
      "Hii, My name is Sarthak Singh. I am a full stack web developer with a passion for creating beautiful and functional websites. I have a background in mathematics and physics, which has given me a strong foundation in problem solving and critical thinking. I am a quick learner and enjoy working in a team environment. I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am always looking to learn new technologies and expand my skill set.",
    images: 0,
  },

  {
    id: 2,
    title: "Skills",
    description:
      "I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I have experience working with Git, GitHub, and Heroku. I have also worked with RESTful APIs and have experience with responsive web design. I am always looking to learn new technologies and expand my skill set.",
    images: 0,
  },

  {
    id: 3,
    title: "Experience",
    description:
      "I have completed an internship at a software development company, where I worked on a project to create a web application for managing employee data. I have also completed an internship at a digital marketing company, where I worked on a project to create a website for a client. I am always looking to learn new technologies and expand my skill set.",
    images: 0,
  },
  {
    id: 4,
    title: "Education",
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science and Engineering from the Indian Institute of Information Technology, Allahabad. I have completed my 12th standard from the Central Board of Secondary Education with a score of 92.2%. I have also completed my 10th standard from the Central Board of Secondary Education with a score of 10 CGPA.",
    images: 0,
  },
];

const sectionVariants = {
  initial: {
    y: 30,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function About() {
  const [numId, setNumId] = useState(1);

  const handlePrev = () => {
    if (numId > 1) {
      setNumId(numId - 1);
    }
  };
  const handleNext = () => {
    if (numId < 4) {
      setNumId(numId + 1);
    }
  };

  return (
    <>
      <div className="about">
        <motion.section>
          <motion.div
            className="classContainer"
            variants={sectionVariants}
            whileInView={sectionVariants.animate}
            initial="initial"
          >
            {container
              .filter((item) => item.id === numId)
              .map((item) => (
                <motion.div className="container" key={item.id}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  {item.images === 0 ? null : (
                    <img src={item.images} alt="images" />
                  )}
                </motion.div>
              ))}
          </motion.div>
          <motion.div
            className="scroll"
            variants={sectionVariants}
            whileInView={sectionVariants.animate}
            initial="initial"
          >
            {numId === 1 ? null : (
              <motion.button
                className="prev"
                whileHover={{ boxShadow: "inset 1px -1px 1px 0px" }}
                onClick={handlePrev}
              >
                Prev
              </motion.button>
            )}

            {numId === 4 ? null : (
              <motion.button
                className="next"
                whileHover={{ boxShadow: "inset -1px -1px 1px 0px" }}
                onClick={handleNext}
              >
                Next
              </motion.button>
            )}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
export default About;
