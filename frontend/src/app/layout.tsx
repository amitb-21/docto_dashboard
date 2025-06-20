import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster, Pacifico } from "next/font/google";
import "../styles/global.css";
import { PatientProvider } from "@/context/PatientContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Doctor Dashboard",
  description: "Manage patients and prescriptions",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PatientProvider>
          {children}
        </PatientProvider>
      </body>
    </html>
  );
}