const Buttons = ({ handleInput }) => {
  return (
    <>
      <div className="container m-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Primary
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Secondary
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Success
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Danger
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Warning
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Info
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Light
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Dark
        </button>

        <button
          type="button"
          className="btn btn-link"
          onClick={() => handleInput("button-clicked", "success")}
        >
          Link
        </button>
      </div>
    </>
  );
};

export default Buttons;
