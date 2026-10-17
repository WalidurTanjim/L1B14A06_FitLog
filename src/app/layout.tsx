import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import WorkoutProvider from "@/app/context/WorkoutProvider";
import {Suspense} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog - Smart Workout Tracking",
  description: "Explore exercises, log sets and reps, and achieve your fitness goals with FitLog.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <WorkoutProvider>
        <body className="fit_log min-h-full flex flex-col bg-black">
          {/* Added suspense to reduce usePathname error from Navbar component */}
          <Suspense fallback={<div className="h-16 bg-[#16181c]" />}>
            <Navbar />
          </Suspense>

          <main>{children}</main>

          <Footer />
          <Toaster />
        </body>
      </WorkoutProvider>
    </html>
  );
}
