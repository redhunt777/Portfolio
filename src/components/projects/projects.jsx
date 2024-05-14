import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const project = [
  {
    id: 1,
    title: "Video Editor's Website",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia modi totam, quo veritatis optio ea, iste enim molestiae numquam doloribus, suscipit doloremque accusantium repellat. Tempore neque ipsum quo aut.",
  },

  {
    id: 2,
    title: "Coaching Website",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia modi totam, quo veritatis optio ea, iste enim molestiae numquam doloribus, suscipit doloremque accusantium repellat. Tempore neque ipsum quo aut.",
  },

  {
    id: 3,
    title: "Connecting Campuses",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia modi totam, quo veritatis optio ea, iste enim molestiae numquam doloribus, suscipit doloremque accusantium repellat. Tempore neque ipsum quo aut.",
  },
];

const Single = ({ items }) => {
  return <section className="section1">{items.title}</section>;
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
        <h1>Featured Work</h1>
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
