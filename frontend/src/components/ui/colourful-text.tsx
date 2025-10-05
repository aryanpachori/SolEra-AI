"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(37, 99, 235)", // blue-600 - main blue
    "rgb(59, 130, 246)", // blue-500 - lighter blue
    "rgb(96, 165, 250)", // blue-400 - even lighter
    "rgb(147, 197, 253)", // blue-300 - light blue
    "rgb(191, 219, 254)", // blue-200 - very light blue
    "rgb(239, 246, 255)", // blue-50 - almost white blue
    "rgb(30, 64, 175)", // blue-800 - darker blue
    "rgb(29, 78, 216)", // blue-700 - dark blue
    "rgb(37, 99, 235)", // blue-600 - main blue (repeat)
    "rgb(59, 130, 246)", // blue-500 - lighter blue (repeat)
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{
            y: 0,
          }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
