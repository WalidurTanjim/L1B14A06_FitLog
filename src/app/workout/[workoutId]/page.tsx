import React, {Suspense} from 'react';
import Image from 'next/image';
import {Exercise} from "@/types/exercise.type";
import TodaysPlan from "@/app/components/WorkoutDetailsButtons/TodaysPlan/TodaysPlan";
import ForLater from "@/app/components/WorkoutDetailsButtons/ForLater/ForLater";

interface WorkoutIdParams {
    params: Promise<{
        workoutId: string;
    }>
}

// getDynamicWorkoutById
const getDynamicWorkoutById = async(id: string): Promise<Exercise> => {
    const parseId = parseInt(id);

    try{
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${parseId}`);

        if(!res.ok) {
            throw new Error("Failed to fetch workout");
        }

        return res.json();
    }catch(err) {
        console.error(err);
        throw err;
    }
}

// sub-component
const DynamicWorkoutDetails = async({ params }: WorkoutIdParams) => {
    const { workoutId } = await params;
    const dynamicWorkout = await getDynamicWorkoutById(workoutId);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Large Image */}
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
                    <Image src={dynamicWorkout.image} alt={dynamicWorkout.name} fill className="object-cover" priority />
                </div>

                {/* Right Side: Details & Actions */}
                <div className="flex flex-col gap-6">

                    {/* Title & Description */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">{dynamicWorkout.name}</h1>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{dynamicWorkout.description}</p>
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2">
                        {dynamicWorkout.muscleGroups.map((group, index) => (
                            <span key={index} className="bg-[#ccff00] text-black font-extrabold text-xs px-3.5 py-1.5 rounded-md uppercase tracking-wider">{group}</span>
                        ))}
                    </div>

                    {/* Key Specs Table / Panel */}
                    <div className="bg-[#16181c] border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col divide-y divide-neutral-800/80 text-sm">
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">EQUIPMENT</span>
                            <span className="text-white font-medium">{dynamicWorkout.equipment}</span>
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">DIFFICULTY</span>
                            <span className="text-white font-medium">{dynamicWorkout.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">SETS</span>
                            <span className="text-white font-medium">{dynamicWorkout.sets}</span>
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">REPS</span>
                            <span className="text-white font-medium">{dynamicUnitFormat(dynamicWorkout.reps)}</span>
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">DURATION</span>
                            <span className="text-white font-medium">{dynamicWorkout.duration} min</span>
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">CALORIES</span>
                            <span className="text-white font-medium">{dynamicWorkout.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-neutral-400 font-medium text-xs tracking-wider">RATING</span>
                            <span className="text-white font-medium">{dynamicWorkout.rating}</span>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-extrabold text-sm tracking-wider uppercase">INSTRUCTIONS</h2>
                        <ol className="flex flex-col gap-2.5 text-neutral-300 text-sm leading-relaxed">
                            {dynamicWorkout.instructions.map((step, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-white font-bold">{index + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                        <TodaysPlan workout={dynamicWorkout} />

                        <ForLater workout={dynamicWorkout} />
                    </div>

                </div>

            </div>
        </div>
    )
}

// Helper function to handle string reps safely
const dynamicUnitFormat = (val: string) => val;

const DynamicWorkoutById = async({ params }: WorkoutIdParams) => {
    return (
        <Suspense fallback={<p className="text-white text-center py-20">Loading...</p>}>
            <DynamicWorkoutDetails params={params} />
        </Suspense>
    );
};

export default DynamicWorkoutById;