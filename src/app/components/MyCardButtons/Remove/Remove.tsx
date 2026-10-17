"use client"
import React from 'react';
import { X } from 'lucide-react';
import useWorkout from "@/app/hooks/useWorkout";
import {Exercise} from "@/types/exercise.type";
import toast from "react-hot-toast";

interface RemoveProps {
    workout: Exercise;
    tab: string;
}

const RemoveButton = ({ workout, tab }: RemoveProps) => {
    const { todaysPlan, setTodaysPlan, forLater, setForLater, activeTab } = useWorkout();

    const handleRemove = () => {
        if(tab === 'todaysPlan') {
            const rest = todaysPlan.filter((plan: Exercise) => plan?.id !== workout?.id);
            setTodaysPlan(rest);
            toast.success("Workout has been removed!");
        }else {
            const rest = forLater.filter((plan: Exercise) => plan?.id !== workout?.id);
            setForLater(rest);
            toast.success("Workout has been removed!");
        }
    }

    return (
        <button className="p-1 text-neutral-400 hover:text-white transition-colors ml-1" aria-label="Remove workout">
            <X className="w-4 h-4" onClick={handleRemove} />
        </button>
    );
};

export default RemoveButton;