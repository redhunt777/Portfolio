import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const project = [
  {
    id: 1,
    title: "Video Editor's Website",
    img: "/Screenshot 2024-05-15 002933.png",
    link: "https://hypercosmicedits.web.app/",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia modi totam, quo veritatis optio ea, iste enim molestiae numquam doloribus, suscipit doloremque accusantium repellat. Tempore neque ipsum quo aut.",
  },

  {
    id: 2,
    title: "Coaching Website",
    img: "/Screenshot 2024-05-15 005443.png",
    link: "https://redhunt777.github.io/coaching-website/",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia modi totam, quo veritatis optio ea, iste enim molestiae numquam doloribus, suscipit doloremque accusantium repellat. Tempore neque ipsum quo aut.",
  },

  {
    id: 3,
    img: "/Screenshot 2024-05-15 005841.png",
    title: "Connecting Campuses",
    link: "https://github.com/redhunt777/connecting-Campus",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia modi totam, quo veritatis optio ea, iste enim molestiae numquam doloribus, suscipit doloremque accusantium repellat. Tempore neque ipsum quo aut.",
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
