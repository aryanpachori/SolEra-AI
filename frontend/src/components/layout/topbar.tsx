"use client";

import { motion } from "motion/react";
import { Search, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopbarProps {
  title: string;
  className?: string;
}

export function Topbar({ title, className }: TopbarProps) {
  return (
    <motion.header
      className={cn(
        "h-14 border-b border-border bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 flex items-center justify-between px-6",
        className
      )}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Page Title */}
      <motion.h1
        className="font-display font-semibold text-text-primary text-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h1>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <motion.button
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Search className="w-5 h-5 text-text-secondary" />
        </motion.button>

        {/* Notifications */}
        <motion.button
          className="p-2 rounded-lg hover:bg-white/5 transition-colors relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Bell className="w-5 h-5 text-text-secondary" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full"></span>
        </motion.button>

        {/* Settings */}
        <motion.button
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Settings className="w-5 h-5 text-text-secondary" />
        </motion.button>
      </div>
    </motion.header>
  );
}
