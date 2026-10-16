"use client";
import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import {Exercise} from "@/types/exercise.type";

interface WorkoutContextType {
    todaysPlan: Exercise[];
    setTodaysPlan: Dispatch<SetStateAction<Exercise[]>>;
    forLater: Exercise[];
    setForLater: Dispatch<SetStateAction<Exercise[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

const WorkoutProvider = ({ children }: { children: React.ReactNode}) => {
    const [todaysPlan, setTodaysPlan] = useState<Exercise[]>([]);
    const [forLater, setForLater] = useState<Exercise[]>([]);

    const value = {
        todaysPlan, setTodaysPlan,
        forLater, setForLater
    }

    return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
};

export default WorkoutProvider;