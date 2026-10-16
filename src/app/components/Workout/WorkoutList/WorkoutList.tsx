import React from 'react';
import {Exercise} from "@/types/exercise.type";
import WorkoutCard from "@/app/components/Workout/WorkoutCard/WorkoutCard";

const getWorkouts = async(): Promise<Exercise[]> => {
    try{
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);

        if(!res.ok) {
            throw new Error("Failed to fetch workouts");
        }

        return res.json();
    }catch(err) {
        console.error(err);
        throw err;
    }
}

const WorkoutList = async() => {
    const workouts = await getWorkouts();

    return (
        <div className={`grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {
                workouts?.map((workout: Exercise) => <WorkoutCard key={workout?.id} workout={workout} />)
            }
        </div>
    );
};

export default WorkoutList;