import React, { useState } from "react";

const CustomHook = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((count) => count + 1);
  };

  const decrement = () => {
    setValue((count) => count - 1);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <br />
      <h2>This is a custom hook counter app</h2>
      <div className="container">
        <h1>Counter App</h1>
        <br />
        <span className="count">{value}</span>
        <br />
        <div className="btn">
          <button className="sub" onClick={decrement}>
            Decrement
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <button className="add" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomHook;
