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
      <h4> A collection of popular exercises. Personalize this page and add your own unique exercises! </h4>
      <div className="card text-center">
        <ExercisesNew onCreateExercise={handleCreateExercise} />
      </div>

      {props.exercises.map((exercise) => (
        <div className="card text-center" key={exercise.id}>
          <div className="card-header">ID: {exercise.id}</div>
          <p className="space" />
          <h5 className="card-title">{exercise.name}</h5>
          <div className="card-body">
            <p className="card-text">{exercise.description}</p>
            <button onClick={() => props.onShowExercise(exercise)}>More info</button>
          </div>
        </div>
      ))}
    </div>
  );
}
