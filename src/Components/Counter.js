import { useState } from "react";
import "./Counter.css";

function Counter() {
  //let count = 0;
  let [count, setCount] = useState(0);
  function incrementCount() {
    if (count !== 15) setCount(count + 1);
  }
  function decrementCount() {
    if (count !== 0) setCount(count - 1);
  }
  function clearCount() {
    setCount(0);
  }
  return (
    <div>
      <h1>Counter Component by Button</h1>
      <button
        className="button"
        onClick={incrementCount}
        title="Increase the count"
      >
        +
      </button>
      <button class="button button4">{count}</button>
      <button 
        className="button button3"
        onClick={decrementCount}
        title="Decrease the count"
      >
        -
      </button>
      <button
        className="button button2"
        onClick={clearCount}
        title="Clear the count"
      >
        x
      </button>
    </div>
  );
}

export default Counter;
