import {useContext} from 'react';
import {WorkoutContext} from "@/app/context/WorkoutProvider";

const UseWorkout = () => {
    const context = useContext(WorkoutContext);

    if(!context) {
        throw new Error("useWorkout must be used within a WorkoutProvider");
    }

    return context;
};

export default UseWorkout;