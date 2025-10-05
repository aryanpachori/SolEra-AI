"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Landing = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Trade smarter on Solana with SolEra AI.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Set price alerts, track your portfolio, and act instantly — guided by AI.
        </div>
        <Link to="/crypto-landing">
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3">
            Connect Wallet
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
};

export default Landing;
