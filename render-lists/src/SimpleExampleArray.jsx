import { useState } from "react";
import { v4 as uuid } from "uuid";

function SimpleExampleArray() {
  const [fruits, setfruit] = useState(["Apple", "Mango"]);
  function changefruit() {
    setfruit((addFruit)=>{
        return [...addFruit, "graps"]
    });
  }
  return (
    <>
      <ul>
        {fruits.map((fruit) => {
          return <li kry={uuid()}>{fruit}</li>;
        })}
      </ul>
      <button onClick={changefruit}>Change Fruits</button>
    </>
  );
}

export default SimpleExampleArray;
