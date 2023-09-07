import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";
import { WorkoutsIndex } from "./WorkoutsIndex";
import { Modal } from "./Modal";
import { WorkoutsShow } from "./WorkoutsShow";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const [isWorkoutsShowVisible, setIsWorkoutsShowVisible] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState({});

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleShowWorkout = (workout) => {
    console.log("handleShowWorkout", workout);
    setIsWorkoutsShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsWorkoutsShowVisible(false);
  };

  useEffect(handleIndexExercises, []);

  const handleIndexWorkouts = () => {
    console.log("handleIndexWorkouts");
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      console.log(response.data);
      setWorkouts(response.data);
    });
  };

  useEffect(handleIndexWorkouts, []);

  return (
    <>
      <div>
        <h1 style={{ color: "red" }}>Welcome to the Gym Fitness App!</h1>
      </div>
      <div>
        <Signup />
        <Login />
        <LogoutLink />
        <ExercisesIndex exercises={exercises} />
        <WorkoutsIndex workouts={workouts} onShowWorkout={handleShowWorkout} />

        <Modal show={isWorkoutsShowVisible} onClose={handleClose}>
          <WorkoutsShow workout={currentWorkout} />
        </Modal>
      </div>
    </>
  );
}
