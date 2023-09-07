/* eslint-disable react/prop-types */

// export function WorkoutsShow(props) {
//   return (
//     <div>
//       <h1>Workout information</h1>
//       <p>Title: {props.workout.title}</p>
//     </div>
//   );
// }

// this one should work
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

// export function WorkoutsShow(props) {
//   return (
//     <div>
//       <h1>Workout information</h1>
//       <p>Title: {props.workout.title}</p>
//       <h3>These are the exercises as part of the {workout.title}</h3>
//           {workout.exercises.map((exercise) => (
//             <div key={exercise.id}>
//               <h3>{exercise.name}</h3>
//               <p>{exercise.description}</p>
//               <img src={exercise.image_url} />
//               <p>{exercise.video_url}</p>
//             </div>

//     </div>
//   );
// }
