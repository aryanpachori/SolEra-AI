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
      {/* Large card for Portfolio Tracking */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-blue-900 to-blue-800 min-h-[300px]"
        className=""
      >
        <div className="max-w-xs relative z-10">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-12 h-12 text-blue-300 mr-4" />
            <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Portfolio Tracking
            </h2>
          </div>
          <p className="text-left text-base text-neutral-200">
            Monitor all your Solana assets in real-time with advanced charts and analytics. 
            Never lose track of your investments with our comprehensive portfolio management system.
          </p>
        </div>
        <div className="absolute -right-4 lg:-right-[20%] -bottom-4 opacity-20">
          <BarChart3 className="w-32 h-32 text-blue-300" />
        </div>
      </WobbleCard>

      {/* Medium card for Price Alerts */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-indigo-900 to-indigo-800">
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Bell className="w-8 h-8 text-indigo-300 mr-3" />
            <h2 className="text-left text-balance text-lg md:text-xl font-semibold tracking-[-0.015em] text-white">
              Price Alerts
            </h2>
          </div>
          <p className="text-left text-sm text-neutral-200">
            Never miss important price movements with customizable alerts.
          </p>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10">
          <Bell className="w-20 h-20 text-indigo-300" />
        </div>
      </WobbleCard>

      {/* Medium card for AI-Powered Insights */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-300 mr-3" />
            <h2 className="text-left text-balance text-lg md:text-xl font-semibold tracking-[-0.015em] text-white">
              AI-Powered Insights
            </h2>
          </div>
          <p className="text-left text-sm text-neutral-200">
            Get intelligent analysis and recommendations from our advanced AI.
          </p>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10">
          <Sparkles className="w-20 h-20 text-purple-300" />
        </div>
      </WobbleCard>

      {/* Medium card for Real-time Data */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-green-900 to-green-800">
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-green-300 mr-3" />
            <h2 className="text-left text-balance text-lg md:text-xl font-semibold tracking-[-0.015em] text-white">
              Real-time Data
            </h2>
          </div>
          <p className="text-left text-sm text-neutral-200">
            Access live blockchain data and market updates instantly.
          </p>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10">
          <Zap className="w-20 h-20 text-green-300" />
        </div>
      </WobbleCard>

      {/* Medium card for Advanced Analytics */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-orange-900 to-orange-800">
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 text-orange-300 mr-3" />
            <h2 className="text-left text-balance text-lg md:text-xl font-semibold tracking-[-0.015em] text-white">
              Advanced Analytics
            </h2>
          </div>
          <p className="text-left text-sm text-neutral-200">
            Deep dive into on-chain metrics and trading patterns.
          </p>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10">
          <TrendingUp className="w-20 h-20 text-orange-300" />
        </div>
      </WobbleCard>

      {/* Medium card for News & Updates */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-teal-900 to-teal-800">
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Newspaper className="w-8 h-8 text-teal-300 mr-3" />
            <h2 className="text-left text-balance text-lg md:text-xl font-semibold tracking-[-0.015em] text-white">
              News & Updates
            </h2>
          </div>
          <p className="text-left text-sm text-neutral-200">
            Stay informed with curated Solana ecosystem news.
          </p>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10">
          <Newspaper className="w-20 h-20 text-teal-300" />
        </div>
      </WobbleCard>
    </div>
  );
}
