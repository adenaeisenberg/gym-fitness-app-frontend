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
    <div>
      {props.exercises.map((exercise) => (
        <div className="card text-center" key={exercise.id}>
          <div className="card-header">ID: {exercise.id}</div>
          <h5 className="card-title">{exercise.name}</h5>
          <div className="card-body">
            <p className="card-text">{exercise.description}</p>
            <button onClick={() => props.onShowExercise(exercise)}>More info</button>
          </div>
        </div>
      ))}
      <ExercisesNew onCreateExercise={handleCreateExercise} />
    </div>
  );
}
// {exercise.description}
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
