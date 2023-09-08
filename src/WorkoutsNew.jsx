export function WorkoutsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWorkout(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Workout!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <button type="submit">Create New Workout</button>
      </form>
    </div>
  );
}
