'use client'; // এটি অবশ্যই ক্লায়েন্ট কম্পোনেন্ট হতে হবে

import React, { useEffect } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
    useEffect(() => {
        // কনসোলে এররটি লগ করে রাখতে পারো (ডিবাগিংয়ের জন্য)
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="w-full min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full bg-[#16181c] border border-neutral-800 rounded-3xl p-8 flex flex-col items-center text-center gap-6 shadow-2xl">

                {/* Warning Icon Box */}
                <div className="p-4 bg-neutral-900 rounded-2xl border border-neutral-800 text-[#ccff00]">
                    <AlertTriangle className="w-10 h-10" />
                </div>

                {/* Title & Message */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-extrabold tracking-wider uppercase text-white">
                        SOMETHING WENT WRONG!
                    </h1>
                    <p className="text-neutral-400 text-xs sm:text-sm">
                        An unexpected error occurred in the application. Don&apos;t worry, you can try again or go back home.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
                    {/* Try Again Button (reset কল করে পেজ রি-রেন্ডার করবে) */}
                    <button
                        onClick={() => reset()}
                        className="w-full flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-5 py-3 rounded-full text-xs transition-colors shadow-lg cursor-pointer"
                    >
                        <RotateCcw className="w-4 h-4 stroke-[2.5]" />
                        <span>Try again</span>
                    </button>

                    {/* Go Home Button */}
                    <Link
                        href="/"
                        className="w-full flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-5 py-3 rounded-full text-xs transition-colors border border-neutral-700"
                    >
                        <Home className="w-4 h-4 stroke-[2.5]" />
                        <span>Go to workouts</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;