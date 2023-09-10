export function ExercisesShow(props) {
  return (
    <div>
      <h1>Exercise information</h1>
      <p>{props.exercise.description}</p>
      <img src={props.exercise.image_url} />
      <p>Video Tutorial: {props.exercise.video_url}</p>
    </div>
  );
}
