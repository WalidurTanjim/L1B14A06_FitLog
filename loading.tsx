import React from 'react';

const GlobalLoadingPage = () => {
    return (
        <div className="w-full min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-5">
            <div className="flex flex-col items-center justify-center gap-4 max-w-sm text-center">

                {/* Logo / Brand Name */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#ccff00] font-extrabold tracking-wider text-xl uppercase">FITLOG</span>
                </div>

                {/* DaisyUI Loading Ring Spinner */}
                <span className="loading loading-ring loading-xl text-[#ccff00]"></span>

                {/* Loading Text / Message */}
                <div className="flex flex-col gap-1 mt-2">
                    <h3 className="text-white font-bold tracking-wide text-3xl uppercase">Loading your workout space...</h3>
                    <p className="text-neutral-400 text-xs">Getting everything ready for you. Please wait a moment.</p>
                </div>

            </div>
        </div>
    );
};

export default GlobalLoadingPage;