/* eslint-disable react/prop-types */

export function WorkoutsShow(props) {
  return (
    <div>
      <h1>My Workouts</h1>
      <h2>{props.workout.title}</h2>
      {props.workout.routines.map((routine) => (
        <div key={routine.id}>
          <h4>{routine.exercise.name}</h4>
          <p>Reps: {routine.reps}</p>
          <p>Weight: {routine.weight}</p>
        </div>
      ))}
    </div>
  );
}
