//import Navbar from "../components/Navbar";
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/Sidebar";

import {
  IconLayoutDashboard,
  IconUser,
  IconNotes,
  IconPrescription,
} from "@tabler/icons-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconLayoutDashboard size={20} />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUser size={20} />,
    },
    {
      label: "Patient Log",
      href: "/patient-log",
      icon: <IconNotes size={20} />,
    },
    {
      label: "Prescription Log",
      href: "/prescription-log",
      icon: <IconPrescription size={20} />,
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar>
  <SidebarBody>
    <div className="mb-6 px-2 pt-4 flex items-center gap-2">
      <Image src="/logo.svg" alt="Logo" width={32} height={32} />

      <motion.span
        animate={{
          display: open ? "inline-block" : "none",
          opacity: open ? 1 : 0,
        }}
        className="text-xl font-bold text-blue-700 origin-left"
      >
      
      </motion.span>
    </div>

    <div className="flex flex-col gap-4">
      {links.map((link, index) => (
        <SidebarLink key={index} link={link} />
      ))}
    </div>
  </SidebarBody>
</Sidebar>

      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
