import { useState } from "react";

function Counter() {
  const [counter, setcounter] = useState(0);
  const Increase = () => {
    setcounter((prevState) => prevState + 1);
    // console.log(Increase);
  };
  const Descrease = () => {
    setcounter((prevState) => prevState - 1);
    // console.log(Descrease);
  };
  const Reset = () => {
    setcounter(0);
    // console.log(Reset);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Descrease}>Descrease</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default Counter;
