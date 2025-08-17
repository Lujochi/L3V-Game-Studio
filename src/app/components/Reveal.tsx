"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
}

export default function Reveal({ children, direction = "left" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const getOffset = () => {
    switch (direction) {
      case "left":
        return { x: -150, y: 0 };
      case "right":
        return { x: 150, y: 0 };
      case "top":
        return { x: 0, y: -150 };
      case "bottom":
        return { x: 0, y: 150 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
