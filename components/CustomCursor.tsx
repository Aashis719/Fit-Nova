import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }; 

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) setHovering(true);
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

 return (
  <>
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      style={{
        width: 6,
        height: 6,
        backgroundColor: "#00FF88",
      }}
      animate={{ x: position.x - 3, y: position.y - 3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-[#00FF88]"
      animate={{
        x: position.x - 15,
        y: position.y - 15,
        scale: hovering ? 1.8 : 1,
        opacity: hovering ? 0.7 : 0.4,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        width: 30,
        height: 30,
        boxShadow: "0 0 20px #00FF88",
      }}
    />
  </>
);

};

export default CustomCursor;
