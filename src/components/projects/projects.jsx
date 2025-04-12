import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const project = [
  {
    id: 1,
    title: "Travel Website",
    img: "/travel.png",
    link: "https://explorifytrips.vercel.app/",
    description:
      "This responsive travel website, developed using React, CSS, and Framer Motion, features a mail facility and delivers a seamless, engaging user experience across devices, showcasing the startup's innovative travel services",
  },
  {
    id: 2,
    title: "Booking fresher's pass Website",
    img: "/Screenshot 2024-12-20 024647.png",
    link: "https://mech-fresher.onrender.com/",
    description:
      "This responsive MERN-based website, featuring authentication and a booking system, enables juniors to securely buy passes for the fresher's party while delivering a seamless user experience across devices.",
  },
  {
    id: 3,
    title: "Video Editor's Website",
    img: "/Screenshot 2024-05-15 002933.png",
    link: "https://hyper-cosmic-edits.vercel.app/",
    description:
      "This responsive website, built with HTML, CSS, and JavaScript, showcases their work online and is hosted on Vercel, providing a dynamic and accessible user experience across devices.",
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
