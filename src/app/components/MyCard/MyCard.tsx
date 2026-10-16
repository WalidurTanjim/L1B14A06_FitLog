import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import { Exercise } from "@/types/exercise.type";

interface CardProps {
    workout: Exercise;
    tab: string;
}

const MyCard = ({ workout, tab }: CardProps) => {
    return (
        <div className="w-full bg-[#16181c] border border-neutral-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">

            {/* Left Section: Thumbnail Image & Info */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Thumbnail Image */}
                <div className="relative w-28 h-16 sm:w-36 sm:h-20 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Workout Title, Equipment & Stats */}
                <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="text-white font-extrabold tracking-wide text-sm sm:text-base uppercase truncate">
                        {workout.name}
                    </h3>

                    <p className="text-neutral-400 text-xs truncate">
                        {workout.equipment}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-3 text-[#ccff00] text-xs pt-0.5">
                        <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="text-neutral-300">{workout.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Flame className="w-3.5 h-3.5 fill-[#ccff00]" />
                            <span className="text-neutral-300">{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5" />
                            <span className="text-neutral-300">{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section: Action Buttons & Remove Icon */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-neutral-800/60 pt-3 sm:pt-0">
                {/* Button 1: View Details */}
                <Link
                    href={`/workouts/${workout.id}`}
                    className="px-4 py-2 rounded-full border border-neutral-700/80 hover:border-neutral-500 text-white text-xs font-medium transition-colors text-center"
                >
                    View Details
                </Link>

                {/* Button 2: Mark as Done (Only rendered when tab === 'todaysPlan') */}
                {tab === 'todaysPlan' && (
                    <button className="flex items-center justify-center gap-1.5 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-4 py-2 rounded-full text-xs transition-colors">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Mark as Done</span>
                    </button>
                )}

                {/* Remove/Close Button */}
                <button
                    className="p-1 text-neutral-400 hover:text-white transition-colors ml-1"
                    aria-label="Remove workout"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

        </div>
    );
};

export default MyCard;