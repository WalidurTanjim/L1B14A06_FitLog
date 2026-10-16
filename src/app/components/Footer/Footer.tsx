import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
// If you want to use the lucide icon instead of the logo asset, you can import:
// import { Dumbbell } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#121212] text-white border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Left Side: Brand Logo + Text */}
                <Link href={`/`} className="flex items-center gap-3">
                    {/* Logo Image Asset */}
                    <Image src={logo} alt="FITLOG Logo" width={100} height={100} className="w-5 h-5 object-contain" />
                    <span className="font-extrabold tracking-wider text-lg text-white">FITLOG</span>
                </Link>

                {/* Right Side: Copyright Line */}
                <p className="text-neutral-400 text-sm text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;