"use client"
import React from 'react';
import {Bookmark} from "lucide-react";
import useWorkout from "@/app/hooks/useWorkout";
import {Exercise} from "@/types/exercise.type";

const ForLater = ({ workout }: { workout: Exercise }) => {
    const { setForLater } = useWorkout();

    const handleForLater = () => {
        setForLater(prev => [...prev, workout]);
    }

    return (
        <button onClick={handleForLater} className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#16181c] hover:bg-neutral-800 border border-neutral-800 text-white font-bold px-6 py-4 rounded-xl text-sm transition-colors">
            <Bookmark className="w-4 h-4" />Save for later
        </button>
    );
};

export default ForLater;