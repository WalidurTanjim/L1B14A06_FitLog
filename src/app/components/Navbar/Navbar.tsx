'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current active route

    // Helper function to determine link styles based on active state
    const getLinkStyles = (path: string) => {
        const isActive = pathname === path;
        return isActive
            ? "px-5 py-2 rounded-full bg-[#ccff00] text-black font-medium text-sm transition-colors"
            : "px-5 py-2 rounded-full text-neutral-400 hover:text-white font-medium text-sm transition-colors";
    };

    // Helper styles for mobile menu links
    const getMobileLinkStyles = (path: string) => {
        const isActive = pathname === path;
        return isActive
            ? "px-4 py-2.5 rounded-lg bg-[#ccff00] text-black font-medium text-center text-sm"
            : "px-4 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 font-medium text-center text-sm transition-colors";
    };

    return (
        <header className="w-full bg-[#121212] text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left Side: Logo */}
                <div className="flex items-center gap-3">
                    <Image src={logo} alt={"Logo"} width={100} height={100} className="w-5 h-5" />
                    <span className="font-extrabold tracking-wider text-lg">FITLOG</span>
                </div>

                {/* Middle: Navigation Links (Hidden on small devices) */}
                <nav className="hidden md:flex items-center gap-2 bg-[#1a1a1a] px-2 py-1.5 rounded-full border border-neutral-800">
                    <Link href="/workouts" className={getLinkStyles('/workouts')}>
                        Workouts
                    </Link>
                    <Link href="/my-plan" className={getLinkStyles('/my-plan')}>
                        My Plan
                    </Link>
                </nav>

                {/* Right Side: Status Badges & Mobile Menu Button */}
                <div className="flex items-center gap-6 text-sm">
                    {/* Status Badges */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href={`/my-plan`} className="flex items-center gap-2">
                            <span className="text-neutral-300">Plan</span>
                            <span className="w-7 h-7 rounded-full bg-[#ccff00] text-black font-bold flex items-center justify-center text-xs">
                                0
                            </span>
                        </Link>

                        <Link href={`/my-plan`} className="flex items-center gap-2">
                            <span className="text-neutral-300">Saved</span>
                            <span className="w-7 h-7 rounded-full border border-neutral-700 text-neutral-300 font-bold flex items-center justify-center text-xs">
                                0
                            </span>
                        </Link>
                    </div>

                    {/* Hamburger Menu Toggle Button (Visible on mobile/tablet) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-neutral-300 hover:text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1a1a1a] border-b border-neutral-800 px-6 py-4 flex flex-col gap-3">
                    <Link
                        href="/workouts"
                        onClick={() => setIsOpen(false)}
                        className={getMobileLinkStyles('/workouts')}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        onClick={() => setIsOpen(false)}
                        className={getMobileLinkStyles('/my-plan')}
                    >
                        My Plan
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Navbar;