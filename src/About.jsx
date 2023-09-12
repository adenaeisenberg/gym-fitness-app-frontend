import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>About GymFit</h1>

      <h3> This app is a tool for those looking to easily streamline their workouts and routines</h3>
      <br />
      <h5>
        Create custom workouts by clicking <Link to="/workouts">here</Link>
      </h5>
      <p className="space" />
      <h5>
        To see an index of all exercises, add custom exercises, and learn how to properly do each exercise click{" "}
        <Link to="/exercises">here</Link>
      </h5>
    </div>
  );
}
