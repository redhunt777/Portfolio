import { useState, useEffect, useRef } from "react";
import "./about.scss";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

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
      "I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I have experience working with Git, GitHub. I have also worked with RESTful APIs and have experience with responsive web design. I am always looking to learn new technologies and expand my skill set.",
    images: 0,
  },

  {
    id: 3,
    title: "Experience",
    description:
      "I have made several projects using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I have also take part in several hackathons and coding competitions. I have experience in frontend as well as backened developer",
    images: 0,
  },
  {
    id: 4,
    title: "Education",
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science and Engineering from the Birla Institute of technology, Mesra. I have completed my 12th standard from the Central Board of Secondary Education with a score of 94.80%. I have also completed my 10th standard from the Central Board of Secondary Education with a score of 10 CGPA.",
    images: 0,
  },
];

function About() {
  const [numId, setNumId] = useState(1);
  const numIdValue = useMotionValue(numId);

  useEffect(() => {
    numIdValue.set(numId);
  }, [numId, numIdValue]);

  const X = useTransform(
    numIdValue,
    [1, 2, 3, 4],
    ["0", "-100vw", "-200vw", "-300vw"]
  );

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
          <motion.div className="classContainer">
            {container.map((item) => (
              <motion.div
                className="container"
                initial={item.id === 1 ? { scaleY: 0.8 } : { scaleY: 0.5 }}
                whileInView={{ scaleY: 1, transitionDuration: "0.7s" }}
                key={item.id}
                style={{
                  x: X,
                  transitionDuration: "0.7s",
                }}
              >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                {item.images === 0 ? null : (
                  <img src={item.images} alt="images" />
                )}
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="scroll">
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
