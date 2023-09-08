/* eslint-disable react/prop-types */

import { RoutinesNew } from "./RoutinesNew";

export function WorkoutsShow(props) {
  return (
    <div>
      <h1>{props.workout.title}</h1>
      {props.workout.routines.map((routine) => (
        <div key={routine.id}>
          <h4>{routine.exercise.name}</h4>
          <p>Reps: {routine.reps}</p>
          <p>Weight: {routine.weight}</p>
        </div>
      ))}
      <RoutinesNew />
    </div>
  );
}
