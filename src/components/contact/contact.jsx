import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
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

  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    e: false,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sz0y7cj", "template_a8o27ov", form.current, {
        publicKey: "_UAqXaW9Gn-Nsu3lO",
      })
      .then(
        () => {
          setSuccess(true);
          message.current.value = "";
          email.current.value = "";
          name.current.value = "";
        },
        (error) => {
          setError({
            e: true,
            message: error.text,
          });
        }
      );
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
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <g>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 6 }}
                stroke={0.2}
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

        {success && (
          <motion.div className="success">
            <svg
              stroke="0.1"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 36 36"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, delay: 2 }}
                d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
                d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"
              ></motion.path>
            </svg>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: success ? 0 : 1 }}
          transition={{ delay: 4 }}
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            ref={name}
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            ref={email}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            ref={message}
            rows={6}
            name="message"
            placeholder="Message"
          ></textarea>
          {error.e && (
            <div className="error">
              <span>Error:</span> {error.message}
            </div>
          )}

          <input type="submit" value="Submit" />
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
