import SidebarDemo from "@/components/ui/sidebar-demo";

const SidebarTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Animated Sidebar Demo</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Hover over the sidebar to see the smooth animation effect
      </p>
      <SidebarDemo />
    </div>
  );
};

export default SidebarTest;
