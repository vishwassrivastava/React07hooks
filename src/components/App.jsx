import React from "react";

function App() {
  const [count, setCount] = React.useState(0); //hook use state has 2 argumens
  //one the initial no and second the function

  //const [red,green,blue]=[9,132,227];   //dconstructing the array
  // console.log(blue);

  console.log(count);

  function increase() {
    setCount(count + 1); //changes the value of count by adding 1
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
