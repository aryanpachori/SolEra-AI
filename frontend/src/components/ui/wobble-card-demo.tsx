"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BarChart3, Bell, Sparkles, Zap, TrendingUp, Newspaper } from "lucide-react";

export default function CryptoWobbleCardDemo() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-300" />,
      title: "Portfolio Tracking",
      description: "Monitor all your Solana assets in real-time with advanced charts and analytics"
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-300" />,
      title: "Price Alerts",
      description: "Never miss important price movements with customizable alerts"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-300" />,
      title: "AI-Powered Insights",
      description: "Get intelligent analysis and recommendations from our advanced AI"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-300" />,
      title: "Real-time Data",
      description: "Access live blockchain data and market updates instantly"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-300" />,
      title: "Advanced Analytics",
      description: "Deep dive into on-chain metrics and trading patterns"
    },
    {
      icon: <Newspaper className="w-8 h-8 text-blue-300" />,
      title: "News & Updates",
      description: "Stay informed with curated Solana ecosystem news"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      {features.map((feature, index) => (
        <WobbleCard 
          key={index}
          containerClassName="col-span-1 min-h-[220px] bg-gradient-to-br from-blue-900 to-blue-800"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-3">
                {feature.icon}
                <h2 className="text-left text-balance text-base md:text-lg font-medium tracking-[-0.015em] text-white ml-3 font-heading">
                  {feature.title}
                </h2>
              </div>
              <p className="text-left text-sm text-neutral-200 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          </div>
          <div className="absolute -right-2 -bottom-2 opacity-10">
            {feature.icon}
          </div>
        </WobbleCard>
      ))}
    </div>
  );
}
