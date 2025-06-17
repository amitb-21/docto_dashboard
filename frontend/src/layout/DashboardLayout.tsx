import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-1/4 min-w-[200px] max-w-xs">
          <Sidebar />
        </div>
        <main className="w-3/4 flex-1 p-8 bg-white dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

