import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import SideBar from "../sideBar/sideBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          redhunt777
        </motion.span>
        <div className="social">
          <motion.a
            href="https://www.instagram.com/sarthak_singh613/"
            target="blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/instagram.png"
              alt="instagram icon"
              className="icon"
            ></img>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sarthak-singh-b44466298/"
            target="blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/linkedin.png" alt="linkdin icon" className="icon"></img>
          </motion.a>
          <motion.a
            href="https://github.com/redhunt777"
            target="blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/github.png" alt="github icon" className="icon"></img>
          </motion.a>

          <motion.a
            href="https://discord.com/users/723121540295688235"
            target="blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/discord_2111370.png"
              alt="discord icon"
              className="icon"
            ></img>
          </motion.a>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Navbar;
