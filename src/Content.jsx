import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { ExercisesIndex } from "./ExercisesIndex";
import { WorkoutsIndex } from "./WorkoutsIndex";
import { Home } from "./Home";
import { Modal } from "./Modal";
import { ExercisesShow } from "./ExercisesShow";
import { WorkoutsShow } from "./WorkoutsShow";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [routines, setRoutines] = useState([]);

  // *** EXERCISE ***
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

  useEffect(handleIndexExercises, []);

  // *** WORKOUTS ***

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
        <h1 style={{ color: "red" }}>Your Gym Fitness App!</h1>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/exercises"
            element={
              <>
                <ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} setExercises={setExercises} />
                <Modal show={isExercisesShowVisible} onClose={handleEClose}>
                  <ExercisesShow exercise={currentExercise} />
                </Modal>
              </>
            }
          />
          <Route
            path="/workouts"
            element={
              <>
                <WorkoutsIndex workouts={workouts} onShowWorkout={handleShowWorkout} setWorkouts={setWorkouts} />
                <Modal show={isWorkoutsShowVisible} onClose={handleClose}>
                  <WorkoutsShow
                    workout={currentWorkout}
                    routines={routines}
                    setRoutines={setRoutines}
                    exercises={exercises}
                  />
                </Modal>
                <br />
                <br />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}
