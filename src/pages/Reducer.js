import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

function Reducer() {
  const [value, setValue] = useReducer(reducer, initialState);

  return (
    <>
      <br />
      <h2>This counter app was made using useReducer</h2>
      <div className="container">
        <h1>Reducer</h1>
        <br />
        <span className="count">{value}</span>
        <br />
        <div>
          <button className="add1" onClick={() => setValue("increment")}>
            Add
          </button>
          <button className="sub" onClick={() => setValue("decrement")}>
            Subtract
          </button>
          <button className="reset" onClick={() => setValue("reset")}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Reducer;
