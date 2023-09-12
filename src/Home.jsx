import { Navigate } from "react-router-dom";

export function Home() {
  return <div>{localStorage.jwt === undefined ? <Navigate to="/login" /> : <Navigate to="/workouts" />}</div>;
}
