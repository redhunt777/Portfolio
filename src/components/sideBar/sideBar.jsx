import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/links";
import "./sideBar.scss";
import ToggleButton from "./toggleButton/toggleButton";

const variance = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      delay: 0.1,
      stiffness: 70,
      damping: 40,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((state) => !state);
    console.log("run");
  };

  return (
    <motion.div className="sideBar" animate={open ? "open" : "close"}>
      <motion.div className="bg" initial={variance.close} variants={variance}>
        <Links handleClick={handleClick} state={open}></Links>
      </motion.div>
      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  );
}

export default SideBar;
