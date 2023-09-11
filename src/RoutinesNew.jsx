export function RoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("workout_id", props.currentWorkout.id);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add a Routine to a Workout!</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          Workout ID: <input name="workout_id" type="text" />
        </div> */}
        <div>
          Exercise ID: <input name="exercise_id" type="text" />
        </div>
        <div>
          Reps: <input name="reps" type="text" />
        </div>
        <div>
          Weight: <input name="weight" type="text" />
        </div>
        <button type="submit">Add Exercise to Workout</button>
      </form>
    </div>
  );
}
