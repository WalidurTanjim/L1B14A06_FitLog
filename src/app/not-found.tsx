import React from 'react';
import Link from 'next/link';
import { Monitor, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="w-full min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full flex flex-col items-center text-center gap-6">

                {/* Visual Icon Box / Mock Monitor matching the theme */}
                <div className="relative w-full bg-[#16181c] border border-neutral-800 rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl gap-4">
                    <div className="p-4 bg-neutral-900 rounded-2xl border border-neutral-800 text-[#ccff00]">
                        <Monitor className="w-12 h-12" />
                    </div>

                    {/* 404! Text similar to image */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-[#ccff00]">
                        404!
                    </h1>
                </div>

                {/* Page Not Found Description */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                        PAGE NOT FOUND
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Go to workouts Button wrapped with Next.js Link */}
                <Link
                    href="/"
                    className="mt-2 inline-flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-lg"
                >
                    <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                    <span>Go to workouts</span>
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;