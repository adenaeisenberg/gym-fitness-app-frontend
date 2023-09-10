export function WorkoutsIndex(props) {
  return (
    <div>
      <h1>All Workouts</h1>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <h2>
            {workout.title} ID:{workout.id}
          </h2>
          <button onClick={() => props.onShowWorkout(workout)}>See full workout</button>
        </div>
      ))}
    </div>
  );
}
