import { WorkoutsNew } from "./WorkoutsNew";
import axios from "axios";

export function WorkoutsIndex(props) {
  const handleCreateWorkout = (params, successCallback) => {
    console.log("handleCreateWorkout", params);
    axios.post("http://localhost:3000/workouts.json", params).then((response) => {
      props.setWorkouts([...props.workouts, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>All Workouts</h1>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.title}</h2>
          <button onClick={() => props.onShowWorkout(workout)}>See full workout</button>
        </div>
      ))}
      <WorkoutsNew onCreateWorkout={handleCreateWorkout} />
    </div>
  );
}
