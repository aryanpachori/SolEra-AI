"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Portfolio Tracking - Monitor all your Solana assets in real-time with advanced charts and analytics. Never lose track of your investments again.",
    name: "Portfolio Tracker",
    title: "Real-time Asset Monitoring",
  },
  {
    quote:
      "Price Alerts - Never miss important price movements with customizable alerts. Get notified instantly when your tokens hit target prices.",
    name: "Price Alert System",
    title: "Smart Notifications",
  },
  {
    quote: "AI-Powered Insights - Get intelligent analysis and recommendations from our advanced AI. Make smarter trading decisions with AI guidance.",
    name: "AI Assistant",
    title: "Intelligent Analysis",
  },
  {
    quote:
      "Real-time Data - Access live blockchain data and market updates instantly. Stay ahead with the latest Solana network information.",
    name: "Live Data Feed",
    title: "Instant Updates",
  },
  {
    quote:
      "Advanced Analytics - Deep dive into on-chain metrics and trading patterns. Understand market trends with professional-grade analytics.",
    name: "Analytics Engine",
    title: "On-chain Insights",
  },
  {
    quote:
      "News & Updates - Stay informed with curated Solana ecosystem news. Never miss important developments in the Solana space.",
    name: "News Aggregator",
    title: "Ecosystem Updates",
  },
];
