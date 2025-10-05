"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";

export default function CryptoAnimatedModalDemo() {
  const features = [
    {
      icon: "💼",
      title: "Portfolio Tracking",
      description: "Monitor all your Solana assets in real-time with advanced charts and analytics"
    },
    {
      icon: "🔔",
      title: "Price Alerts",
      description: "Never miss important price movements with customizable alerts"
    },
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description: "Get intelligent analysis and recommendations from our advanced AI"
    },
    {
      icon: "⚡",
      title: "Real-time Data",
      description: "Access live blockchain data and market updates instantly"
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Deep dive into on-chain metrics and trading patterns"
    },
    {
      icon: "📰",
      title: "News & Updates",
      description: "Stay informed with curated Solana ecosystem news"
    }
  ];

  return (
    <Modal>
      <ModalTrigger className="px-8 py-2 border border-white bg-transparent text-white relative group transition duration-200 h-14">
        <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative text-lg font-medium">
          Sign Up with Email
        </span>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Join{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              SolEra AI
            </span>{" "}
            today! 🚀
          </h4>
          <div className="flex justify-center items-center mb-8">
            {features.map((feature, idx) => (
              <motion.div
                key={"features" + idx}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                whileTap={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
              >
                <div className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0 flex items-center justify-center text-2xl md:text-4xl">
                  {feature.icon}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <span className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4">
                  {feature.icon}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Get Started
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
