import "./contact.scss";
import { motion } from "framer-motion";

function Contact() {
  const varients = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="contact"
      variants={varients}
      initial={varients.initial}
      whileInView={varients.animate}
    >
      <motion.div className="textContainer" variants={varients}>
        <motion.h1 variants={varients}>Get In Touch </motion.h1>
        <motion.div className="item" variants={varients}>
          <h2>Mail</h2>
          <span>sarthak613singh@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={varients}>
          <h2>Address</h2>
          <span>Delhi, India</span>
        </motion.div>
        <motion.div className="item" variants={varients}>
          <h2>Phone</h2>
          <span>+91 123456789</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <svg width="400px" height="400px" viewBox="0 0 24 24" fill="none">
            <g>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 6 }}
                d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z"
              />
            </g>
            <g>
              <rect x="5" y="8" width="3" height="3" />
            </g>
            <g>
              <rect x="10" y="8" width="3" height="3" />
            </g>
            <g>
              <rect x="15" y="8" width="3" height="3" />
            </g>
          </svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1.5 }}
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea rows={8} name="message" placeholder="Message"></textarea>
          <input type="submit" value="Submit" />
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
