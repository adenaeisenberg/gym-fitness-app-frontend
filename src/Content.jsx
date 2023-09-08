import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";
import { WorkoutsIndex } from "./WorkoutsIndex";
import { Modal } from "./Modal";
import { ExercisesShow } from "./ExercisesShow";
import { WorkoutsShow } from "./WorkoutsShow";
import { ExercisesNew } from "./ExercisesNew";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleShowExercise = (exercise) => {
    console.log("handleShowExercise", exercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };

  const handleEClose = () => {
    console.log("handleEClose");
    setIsExercisesShowVisible(false);
  };

  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setExercises([...exercises, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexExercises, []);

  const [workouts, setWorkouts] = useState([]);
  const [isWorkoutsShowVisible, setIsWorkoutsShowVisible] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState({});

  const handleShowWorkout = (workout) => {
    console.log("handleShowWorkout", workout);
    setIsWorkoutsShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsWorkoutsShowVisible(false);
  };
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
      <div className="container">
        <h1 style={{ color: "red" }}>Welcome to the Gym Fitness App!</h1>
      </div>
      <div className="container">
        <Signup />
        <Login />
        <LogoutLink />
        <ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} />
        <Modal show={isExercisesShowVisible} onClose={handleEClose}>
          <ExercisesShow exercise={currentExercise} />
        </Modal>
        <ExercisesNew onCreateExercise={handleCreateExercise} />
        <WorkoutsIndex workouts={workouts} onShowWorkout={handleShowWorkout} />
        <Modal show={isWorkoutsShowVisible} onClose={handleClose}>
          <WorkoutsShow workout={currentWorkout} />
        </Modal>
      </div>
    </>
  );
}
