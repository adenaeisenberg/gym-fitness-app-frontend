/* eslint-disable react/prop-types */
export function WorkoutsIndex(props) {
  return (
    <div>
      <h1>All Workouts</h1>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{workout.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{workout.id}</h6>
              <button onClick={() => props.onShowWorkout(workout)}>See full workout</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// <div>
// {props.workouts.map((workout) => (
//      <div key={workout.id}>
//        <h2>
//          {workout.title} ID:{workout.id}
//        </h2>
//        <button onClick={() => props.onShowWorkout(workout)}>See full workout</button>
//      </div>
//    ))}
//    </div>
