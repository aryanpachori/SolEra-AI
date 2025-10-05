"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function CryptoHeroHighlightDemo() {
  return (
    <HeroHighlight className="bg-black">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Powerful Features for{" "}
          <Highlight className="text-black dark:text-white bg-gradient-to-r from-blue-400 to-blue-600">
            Smart Trading
          </Highlight>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Everything you need to trade confidently on the Solana blockchain
        </p>
      </motion.div>
    </HeroHighlight>
  );
}
