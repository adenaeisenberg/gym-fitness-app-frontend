import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";

export function Content() {
  // const exercises = [
  //   { id: 1, name: "Jog in place", description: "run in place", image_url: "image.img", video_url: "video.vid" },
  // ];

  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);

  return (
    <>
      <div>
        <h1>Welcome to the Gym Fitness App!</h1>
      </div>
      <div>
        <Signup />
        <Login />
        <LogoutLink />
        <ExercisesIndex exercises={exercises} />
      </div>
    </>
  );
}
