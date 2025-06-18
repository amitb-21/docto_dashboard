"use client";

import { usePathname } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "./components/Sidebar";
import {
  IconHome,
  IconUser,
  IconNotes,
  IconPrescription,
} from "@tabler/icons-react";

const links = [
  { label: "Dashboard", href: "/dashboard", icon: <IconHome /> },
  { label: "Profile", href: "/profile", icon: <IconUser /> },
  { label: "Patient Log", href: "/patientlog", icon: <IconNotes /> },
  { label: "Prescription Log", href: "/prescriptionlog", icon: <IconPrescription /> },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/";

  return !hideLayout ? (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarBody>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <SidebarLink key={link.href} link={link} />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-col flex-1">
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  ) : (
    children
  );
}
