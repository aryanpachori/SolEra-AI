"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";

export default function CryptoLayoutTextFlipDemo() {
  return (
    <div className="w-full">
      <motion.div className="relative flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
        <LayoutTextFlip
          text="Trade smarter on Solana with "
          words={["SolEra AI", "AI-Powered Trading", "Smart Analytics", "Portfolio Intelligence"]}
          duration={2500}
        />
      </motion.div>
    </div>
  );
}
