import React from 'react';

const LibrarySkeleton = () => {
    // লুপ চালিয়ে একসাথে ৬ বা ৯টি স্কেলেটন কার্ড দেখানোর জন্য একটি অ্যারে তৈরি করা যেতে পারে
    const skeletonItems = Array.from({ length: 6 });

    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {skeletonItems.map((_, index) => (
                <div
                    key={index}
                    className="group block bg-[#16181c] border border-neutral-800/80 rounded-2xl overflow-hidden animate-pulse"
                >
                    {/* Image Section Skeleton */}
                    <div className="relative w-full h-48 sm:h-52 bg-neutral-800/80" />

                    {/* Content Section Skeleton */}
                    <div className="p-5 flex flex-col gap-4">

                        {/* Category Tag Pills Skeleton */}
                        <div className="flex flex-wrap gap-2">
                            <div className="w-16 h-6 bg-neutral-800 rounded-md" />
                            <div className="w-20 h-6 bg-neutral-800 rounded-md" />
                        </div>

                        {/* Workout Name & Equipment Skeleton */}
                        <div className="flex flex-col gap-2">
                            <div className="w-3/4 h-6 bg-neutral-800 rounded-md" />
                            <div className="w-1/2 h-4 bg-neutral-800/60 rounded-md" />
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-[1px] bg-neutral-800" />

                        {/* Stats Row Skeleton */}
                        <div className="flex items-center justify-between">
                            <div className="w-16 h-4 bg-neutral-800/60 rounded-md" />
                            <div className="w-16 h-4 bg-neutral-800/60 rounded-md" />
                            <div className="w-12 h-4 bg-neutral-800/60 rounded-md" />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default LibrarySkeleton;