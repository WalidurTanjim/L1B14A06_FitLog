"use client";
import React from 'react';
import {Exercise} from "@/types/exercise.type";
import useWorkout from "@/app/hooks/useWorkout";
import { Check } from 'lucide-react';
import toast from "react-hot-toast";

interface CompletedExercise extends Exercise {
    isCompleted?: boolean;
}

const MarkAsDone = ({ workout }: { workout: CompletedExercise }) => {
    const { todaysPlan, setTodaysPlan } = useWorkout();

    const isDone = workout?.isCompleted || false;

    const handleDone = () => {
        const updatedItem = todaysPlan.map((item: CompletedExercise) => {
            if(item?.id === workout?.id) {
                return {...item, isCompleted: true};
            }
            return item;
        })

        setTodaysPlan(updatedItem);
        toast.success("Workout marked as done.");
    }

    return (
        <button onClick={handleDone} className={`flex items-center justify-center gap-1.5 font-bold px-4 py-2 rounded-full text-xs transition-colors ${isDone ? 'bg-neutral-800 text-[#ccff00] border border-[#ccff00]/40 cursor-default' : 'bg-[#ccff00] hover:bg-[#b3e600] text-black'}`}>
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>{isDone ? "Done" : "Mark as done"}</span>
        </button>
    );
};

export default MarkAsDone;