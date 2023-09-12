export function WorkoutsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWorkout(params, () => event.target.reset());
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">New Workout!</h5>
          <form onSubmit={handleSubmit}>
            <div>
              Title: <input name="title" type="text" />
            </div>
            <button type="submit">Add a New Workout!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
