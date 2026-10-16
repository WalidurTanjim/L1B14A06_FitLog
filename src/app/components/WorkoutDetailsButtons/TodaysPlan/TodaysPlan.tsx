"use client"
import React from 'react';
import useWorkout from "@/app/hooks/useWorkout";
import {Calendar} from "lucide-react";
import {Exercise} from "@/types/exercise.type";

const TodaysPlan = ({ workout }: { workout: Exercise }) => {
    const { setTodaysPlan } = useWorkout();

    const handleTodaysPlan = () => {
        setTodaysPlan(prev => [...prev, workout]);
    }

    return (
        <button onClick={handleTodaysPlan} className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-6 py-4 rounded-xl text-sm transition-colors shadow-lg">
            <Calendar className="w-4 h-4" />Add to today&apos;s plan
        </button>
    );
};

export default TodaysPlan;