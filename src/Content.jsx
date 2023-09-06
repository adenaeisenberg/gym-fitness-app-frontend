import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {

  // making a function to view all exercises 
const 

  return (
    <>
      <div>
        <h1>Welcome to the Gym Fitness App!</h1>
      </div>
      <div>
        <Signup />
        <Login />
        <LogoutLink />
      </div>
    </>
  );
}
