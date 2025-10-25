import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { motion } from "motion/react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex w-full bg-background text-text-primary overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
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
      </div>
    </div>
  );
};

export default DashboardLayout;
