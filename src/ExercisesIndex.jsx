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
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <button onClick={() => props.onShowExercise(exercise)}>More info</button>
        </div>
      ))}
      <ExercisesNew onCreateExercise={handleCreateExercise} />
    </div>
  );
}
