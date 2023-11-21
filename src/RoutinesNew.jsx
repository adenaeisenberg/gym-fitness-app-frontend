/* eslint-disable react/prop-types */
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
        <div>
          Exercise:
          <select name="exercise_id" id="exercises">
            {props.exercises.map((exercise) => (
              <option value={exercise.id} key={exercise.id}>
                {exercise.name}
              </option>
            ))}
          </select>
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
