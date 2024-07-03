import "./hero.scss";
import { animate, motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 40,
    },
  },
};

const imageVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const imgVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "5%",
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial={textVariants.initial}
          animate={textVariants.animate}
        >
          <motion.h2 variants={textVariants}>Sarthak Singh</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{
                cursor: "pointer",
                backgroundColor: "#fff",
                color: "#000",
              }}
              onClick={() => {
                alert("Portfolio will be added soon");
              }}
            >
              Download Portfolio
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{
                cursor: "pointer",
                backgroundColor: "#fff",
                color: "#000",
              }}
              onClick={() => {
                window.location.href = "#Contact";
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <a href="#Projects">
            <motion.img
              variants={textVariants}
              animate={textVariants.scrollButton}
              src="/scroll.png"
              alt="scroll image"
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial={sliderVariants.initial}
        animate={sliderVariants.animate}
      >
        Full Stack MERN Developer
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial={imageVariants.initial}
        animate={imageVariants.animate}
      >
        <motion.img
          src="/3800_5_04-removebg-preview.png"
          alt="Astronaut Image"
          variants={imgVariants}
          initial={imgVariants.initial}
          animate={imgVariants.animate}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
