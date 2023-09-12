import { RoutinesNew } from "./RoutinesNew";
import axios from "axios";

/* eslint-disable react/prop-types */

export function WorkoutsShow(props) {
  const handleCreateRoutine = (params, successCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      props.setRoutines([...props.routines, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>{props.workout.title}</h1>
      {props.workout.routines?.map((routine) => (
        <div key={routine.id}>
          <h4>{routine.exercise.name}</h4>
          <p>Reps: {routine.reps}</p>
          <p>Weight: {routine.weight}</p>
        </div>
      ))}
      <RoutinesNew onCreateRoutine={handleCreateRoutine} currentWorkout={props.workout} exercises={props.exercises} />
    </div>
  );
}
