"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BarChart3, 
  Sparkles, 
  Newspaper, 
  User,
  Bot
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    name: "Portfolio",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics", 
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "AI Assistant",
    href: "/ai",
    icon: Bot,
  },
  {
    name: "News",
    href: "/news", 
    icon: Newspaper,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      className={cn(
        "w-64 shrink-0 bg-surface border-r border-border sticky top-0 h-[100dvh] relative overflow-hidden",
        className
      )}
      animate={{
        width: open ? "256px" : "64px",
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0"
        animate={{
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <motion.span
              className="font-display font-semibold text-text-primary whitespace-nowrap"
              animate={{
                opacity: open ? 1 : 0,
                width: open ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              SolEra AI
            </motion.span>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-200 relative overflow-hidden",
                      isActive && "bg-white/5 text-text-primary border border-border"
                    )}
                    role="link"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Hover gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className="relative z-10 shrink-0 flex items-center justify-center w-6 h-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-5 h-5 text-text-secondary group-hover:text-text-primary" />
                    </motion.div>
                    
                    {/* Label */}
                    <motion.span
                      className="relative z-10 text-sm font-medium whitespace-nowrap"
                      animate={{
                        opacity: open ? 1 : 0,
                        width: open ? "auto" : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <img
              src="/cat_pfp.jpg"
              className="w-8 h-8 rounded-full shrink-0"
              alt="User Avatar"
            />
            <motion.div
              className="flex-1 min-w-0"
              animate={{
                opacity: open ? 1 : 0,
                width: open ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <p className="text-sm font-medium text-text-primary truncate">
                User Profile
              </p>
              <p className="text-xs text-text-secondary truncate">
                SolEra AI
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
