import { WorkoutsNew } from "./WorkoutsNew";
import axios from "axios";

/* eslint-disable react/prop-types */
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

      <WorkoutsNew onCreateWorkout={handleCreateWorkout} />

      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{workout.title}</h5>
              <button onClick={() => props.onShowWorkout(workout)}>See full workout</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
