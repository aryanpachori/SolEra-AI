import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { useSidebar } from "@/contexts/SidebarContext";
import { motion } from "motion/react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const { isOpen } = useSidebar();
  
  return (
    <div className="min-h-screen w-full bg-background text-text-primary">
      <Sidebar />
      
      <motion.div 
        className="flex flex-col min-h-screen"
        animate={{
          marginLeft: isOpen ? "256px" : "80px",
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <Topbar title={title} />
        
        <main className="flex-1 overflow-y-auto">
          <motion.div 
            className="mx-auto max-w-7xl p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
};

export default DashboardLayout;
