import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";

export function Content() {
  // making a function to view all exercises
  // const

  return (
    <>
      <div>
        <h1>Welcome to the Gym Fitness App!</h1>
      </div>
      <div>
        <Signup />
        <Login />
        <LogoutLink />
        <ExercisesIndex />
      </div>
    </>
  );
}
