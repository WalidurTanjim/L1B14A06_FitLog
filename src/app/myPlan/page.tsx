'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useWorkout from "@/app/hooks/useWorkout";
import {Exercise} from "@/types/exercise.type";
import MyCard from "@/app/components/MyCard/MyCard";

const MyPlan = () => {
    const { todaysPlan, forLater, activeTab, setActiveTab } = useWorkout();

    // activeTab স্টেট দিয়ে ট্র্যাক করা হচ্ছে কোন ট্যাব সিলেক্ট করা আছে (by default 'todaysPlan')
    // const [activeTab, setActiveTab] = useState<'todaysPlan' | 'saved'>('todaysPlan');
    const [sortBy, setSortBy] = useState('Duration');

    // বর্তমান সিলেক্টেড ট্যাবের ওপর ভিত্তি করে ডেটা ও স্ট্যাট ক্যালকুলেশন
    const currentList = activeTab === 'todaysPlan' ? todaysPlan : forLater;
    console.log(currentList);

    const totalExercises = currentList.length;
    const totalMinutes = currentList.reduce((acc, item) => acc + (item?.duration || 0), 0);
    const totalCalories = currentList.reduce((acc, item) => acc + (item?.caloriesBurned), 0);

    return (
        <div className="w-full bg-[#121212] min-h-screen text-white py-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                {/* Header Section */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">
                        MY PLAN
                    </h1>
                    <p className="text-neutral-400 text-sm sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* লাল বক্স করা অংশ: ৩টি ভাগে বিভক্ত স্ট্যাট প্যানেল */}
                <div className="bg-[#16181c] border border-neutral-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">

                    {/* Stat 1: Exercises */}
                    <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:px-6 first:pl-0">
                        <span className="text-neutral-400 text-xs sm:text-sm font-medium">Exercises</span>
                        <span className="text-[#ccff00] text-3xl sm:text-4xl font-extrabold">
                            {totalExercises}
                        </span>
                    </div>

                    {/* Stat 2: Minutes */}
                    <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:px-6">
                        <span className="text-neutral-400 text-xs sm:text-sm font-medium">Minutes</span>
                        <span className="text-white text-3xl sm:text-4xl font-extrabold">
                            {totalMinutes}
                        </span>
                    </div>

                    {/* Stat 3: Calories */}
                    <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:px-6">
                        <span className="text-neutral-400 text-xs sm:text-sm font-medium">Calories</span>
                        <span className="text-white text-3xl sm:text-4xl font-extrabold">
                            {totalCalories}
                        </span>
                    </div>

                </div>

                {/* Controls Bar: Tabs & Sort Dropdown */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">

                    {/* DaisyUI Custom Styled Tabs */}
                    <div className="flex items-center gap-2 bg-[#16181c] p-1.5 rounded-full border border-neutral-800">
                        <button
                            onClick={() => setActiveTab('todaysPlan')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeTab === 'todaysPlan'
                                    ? 'bg-[#ccff00] text-black font-bold'
                                    : 'text-neutral-400 hover:text-white'
                            }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeTab === 'saved'
                                    ? 'bg-[#ccff00] text-black font-bold'
                                    : 'text-neutral-400 hover:text-white'
                            }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="flex items-center gap-3">
                        <span className="text-neutral-400 text-sm">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select bg-[#16181c] text-white border border-neutral-800 rounded-xl text-sm focus:outline-none focus:border-neutral-600 px-4 py-2 cursor-pointer"
                        >
                            <option value="Duration">Duration</option>
                            <option value="Calories">Calories</option>
                            <option value="Rating">Rating</option>
                        </select>
                    </div>

                </div>

                {/* সবুজ বক্স করা অংশ: ডেটা থাকলে কার্ড বা না থাকলে খালি অবস্থার ইউআই */}
                <div className="w-full min-h-[400px] bg-[#16181c] border border-dashed border-neutral-700/60 rounded-3xl p-8 flex flex-col items-center justify-center text-center">

                    {currentList.length > 0 ? (
                        /* যখন ডেটা থাকবে তখন এখানে কার্ডগুলো রেন্ডার হবে */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {/* তোমার WorkoutCard কম্পোনেন্ট এখানে ম্যাপ করে বসাতে পারো */}
                            {
                                currentList.map((workout: Exercise) => <MyCard key={workout?.id} workout={workout} tab={activeTab} />)
                            }
                        </div>
                    ) : (
                        /* যখন কোনো ডেটা থাকবে না (Empty State) */
                        <div className="flex flex-col items-center gap-4 max-w-md">
                            <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider uppercase text-white">
                                NOTHING HERE YET
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Browse the library and add a lift to get today moving.
                            </p>
                            <Link
                                href="/"
                                className="mt-2 inline-flex items-center justify-center bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-lg"
                            >
                                Go to workouts
                            </Link>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default MyPlan;