import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconDashboard,
  IconChartBar,
  IconRobot,
  IconNews,
  IconUser,
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
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-blue-500" />
      ),
      href: "#about",
    },
    {
      title: "Sign In",
      icon: (
        <IconLogin className="h-full w-full text-blue-500" />
      ),
      href: "/auth",
    },
    {
      title: "Get Started",
      icon: (
        <IconHome className="h-full w-full text-blue-500" />
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
