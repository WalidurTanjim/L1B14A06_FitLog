import Image from "next/image";
import logo from "@/assets/logo.png";
// If you want to use the lucide icon instead of the logo asset, you can import:
// import { Dumbbell } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#121212] text-white border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Left Side: Brand Logo + Text */}
                <div className="flex items-center gap-3">
                    {/* Logo Image Asset */}
                    <Image
                        src={logo}
                        alt="FITLOG Logo"
                        width={100}
                        height={100}
                        className="w-5 h-5 object-contain"
                    />

                    {/* Alternative: Lucide Dumbbell Icon matching Figma */}
                    {/* <div className="text-[#ccff00]">
            <Dumbbell className="w-6 h-6 transform -rotate-45" strokeWidth={2.5} />
          </div> */}

                    <span className="font-extrabold tracking-wider text-lg text-white">
            FITLOG
          </span>
                </div>

                {/* Right Side: Copyright Line */}
                <p className="text-neutral-400 text-sm text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;