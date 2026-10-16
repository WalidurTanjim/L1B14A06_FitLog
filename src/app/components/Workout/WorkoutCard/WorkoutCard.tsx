// import React from 'react';
// import {Exercise} from "@/types/exercise.type";
//
// interface WorkoutProps {
//     workout: Exercise
// }
//
// const WorkoutCard = async({ workout }: WorkoutProps) => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default WorkoutCard;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';
import { Exercise } from "@/types/exercise.type";

interface WorkoutProps {
    workout: Exercise;
}

const WorkoutCard = async ({ workout }: WorkoutProps) => {
    return (
        <Link href={`/workouts/${workout.id}`} className="group block bg-[#16181c] border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-200">
            {/* Image Section */}
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-neutral-900">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col gap-4">

                {/* Category Tag Pills */}
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group, index) => (
                        <span
                            key={index}
                            className="bg-[#ccff00] text-black font-extrabold text-[11px] tracking-wider px-2.5 py-1 rounded-md uppercase"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                {/* Workout Name & Equipment */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-white font-extrabold tracking-wide text-base sm:text-lg uppercase">
                        {workout.name}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm">
                        {workout.equipment}
                    </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-neutral-800" />

                {/* Stats Row with Icons */}
                <div className="flex items-center justify-between text-neutral-300 text-xs sm:text-sm">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-neutral-400" />
                        <span>{workout.duration} min</span>
                    </div>

                    {/* Calories Burned */}
                    <div className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-neutral-400" />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-neutral-400 fill-neutral-400" />
                        <span>{workout.rating}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;