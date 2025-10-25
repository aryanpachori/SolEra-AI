import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { LayoutDashboard, BarChart3, Sparkles, Newspaper, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  className?: string;
}

export default function DashboardSidebar({ className }: DashboardSidebarProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { 
      label: "Portfolio", 
      href: "/dashboard", 
      icon: <LayoutDashboard className="h-5 w-5 shrink-0 text-white" />
    },
    { 
      label: "Analytics", 
      href: "/analytics", 
      icon: <BarChart3 className="h-5 w-5 shrink-0 text-white" />
    },
    { 
      label: "AI Assistant", 
      href: "/ai", 
      icon: <Sparkles className="h-5 w-5 shrink-0 text-white" />
    },
    { 
      label: "News", 
      href: "/news", 
      icon: <Newspaper className="h-5 w-5 shrink-0 text-white" />
    },
    { 
      label: "Profile", 
      href: "/profile", 
      icon: <User className="h-5 w-5 shrink-0 text-white" />
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <SolEraLogo /> : <SolEraLogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {menuItems.map((item, idx) => (
              <Link key={idx} to={item.href}>
                <SidebarLink
                  link={item}
                  className={cn(
                    "rounded-lg transition-colors",
                    location.pathname === item.href 
                      ? "bg-blue-500/20 text-blue-400" 
                      : "hover:bg-white/10 text-white"
                  )}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Logout",
              href: "/auth",
              icon: <LogOut className="h-5 w-5 shrink-0 text-white" />
            }}
            className="hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-colors"
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const SolEraLogo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-6 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-gradient-to-br from-blue-500 to-blue-600" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold whitespace-pre text-white"
      >
        SolEra AI
      </motion.span>
    </Link>
  );
};

export const SolEraLogoIcon = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-6 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-gradient-to-br from-blue-500 to-blue-600" />
    </Link>
  );
};
