import { ExercisesNew } from "./ExercisesNew";
import axios from "axios";

export function ExercisesIndex(props) {
  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      props.setExercises([...props.exercises, response.data]);
      successCallback();
    });
  };

  return (
    <>
      <br />
      <div className="card text-center">
        {props.exercises.map((exercise) => (
          <div key={exercise.id}>
            <div className="card-header">{exercise.name}</div>
            <div className="card-body">
              <button onClick={() => props.onShowExercise(exercise)}>More info</button>
              <h5 className="card-title">{exercise.description}</h5>
            </div>
          </div>
        ))}
        <ExercisesNew onCreateExercise={handleCreateExercise} />
      </div>
    </>
  );
}

{
  /* <div>
  <h1>All Exercises</h1>
  {props.exercises.map((exercise) => (
    <div key={exercise.id}>
      <h2>{exercise.name}</h2>
      <button onClick={() => props.onShowExercise(exercise)}>More info</button>
    </div>
  ))}
  <br />
  <ExercisesNew onCreateExercise={handleCreateExercise} />
</div>; */
}
