import React, {Suspense} from 'react';
import WorkoutList from "@/app/components/Workout/WorkoutList/WorkoutList";
import LibrarySkeleton from "@/app/components/Skeleton/LibrarySkeleton/LibrarySkeleton";

const Library = () => {
    return (
        <section id={`library`} className="w-full bg-[#121212] py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div>
                    <h1 className={`text-3xl text-white font-semibold`}>THE LIBRARY</h1>
                    <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">Twelve lifts covering every major muscle group.</p>
                </div>

                <Suspense fallback={<LibrarySkeleton />}>
                    <WorkoutList />
                </Suspense>
            </div>
        </section>
    );
};

export default Library;