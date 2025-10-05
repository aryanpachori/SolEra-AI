import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconChartBar,
  IconActivity,
  IconBrain,
  IconShield,
  IconRoute,
  IconHelp,
  IconLogin,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function CryptoFloatingDockDemo() {
  const links = [
    {
      title: "Features",
      icon: (
        <IconChartBar className="h-full w-full text-blue-500" />
      ),
      href: "#features",
    },
    {
      title: "Network Pulse",
      icon: (
        <IconActivity className="h-full w-full text-blue-500" />
      ),
      href: "#network-pulse",
    },
    {
      title: "AI Engine",
      icon: (
        <IconBrain className="h-full w-full text-blue-500" />
      ),
      href: "#ai-engine",
    },
    {
      title: "Security",
      icon: (
        <IconShield className="h-full w-full text-blue-500" />
      ),
      href: "#security",
    },
    {
      title: "Roadmap",
      icon: (
        <IconRoute className="h-full w-full text-blue-500" />
      ),
      href: "#roadmap",
    },
    {
      title: "FAQ",
      icon: (
        <IconHelp className="h-full w-full text-blue-500" />
      ),
      href: "#faq",
    },
    {
      title: "Sign In",
      icon: (
        <IconLogin className="h-full w-full text-blue-500" />
      ),
      href: "/auth",
    },
  ];
  
  return (
    <FloatingDock
      desktopClassName="bg-black/80 backdrop-blur-lg border border-white/20 shadow-xl"
      mobileClassName="translate-y-0"
      items={links}
    />
  );
}
