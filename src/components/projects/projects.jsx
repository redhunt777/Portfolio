import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const project = [
  {
    id: 1,
    title: "Video Editor's Website",
    img: "/Screenshot 2024-05-15 002933.png",
    link: "https://hyper-cosmic-edits.vercel.app/",
    description:
      "This responsive website, built with HTML, CSS, and JavaScript, showcases their work online and is hosted on Vercel, providing a dynamic and accessible user experience across devices.",
  },

  {
    id: 2,
    title: "Coaching Website",
    img: "/download.png",
    link: "https://physics-coaching-website.vercel.app/",
    description:
      "This responsive, user-friendly website is built with React for the frontend, Node.js with Express.js for the backend, and is hosted on Vercel, designed specifically for students to easily download their notes. This website is currently under development.",
  },
];

const Single = ({ items }) => {
  return (
    <section className="section1">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <motion.img src={items.img} alt="image of the given website" />
          </div>
          <motion.div className="textContainer">
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <motion.a
              href={items.link}
              target="_blank"
              whileTap={{ scale: 0.95 }}
            >
              <button>See Demo </button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Projects() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Unveiling Work</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {project.map((item) => (
        <Single items={item} key={item.id}></Single>
      ))}
    </div>
  );
}
export default Projects;
