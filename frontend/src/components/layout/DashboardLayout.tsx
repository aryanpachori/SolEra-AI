import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/aceternity-sidebar";
import { LayoutDashboard, BarChart3, Sparkles, Newspaper, User } from "lucide-react";
import { motion } from "motion/react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
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
    <div className="min-h-screen flex w-full bg-black text-white overflow-hidden">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {menuItems.map((item, idx) => (
                <SidebarLink key={idx} link={item} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "User Profile",
                href: "/profile",
                icon: (
                  <img
                    src="/cat_pfp.jpg"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 overflow-auto">
        <motion.header 
          className="sticky top-0 z-10 border-b border-white/10 bg-black/50 backdrop-blur-lg p-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <motion.h1 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.h1>
          </div>
        </motion.header>

        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

// Logo components
export const Logo = () => {
  return (
    <motion.a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white relative overflow-hidden"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-medium whitespace-pre text-white"
      >
        SolEra AI
      </motion.span>
    </motion.a>
  );
};

export const LogoIcon = () => {
  return (
    <motion.a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white relative overflow-hidden"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  );
};

export default DashboardLayout;
