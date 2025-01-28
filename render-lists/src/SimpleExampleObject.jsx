import { useState } from "react";

function SimpleExampleObject() {
  const [person, setperson] = useState({
    id: 1,
    firstName: "Akshat",
    lastName: "Sharma",
    phoneNo: "7301504346",
    email: "itsakshat07sharma@gmail.com",
    age: 22,
  });
  function changeAge() {
    setperson((newPerson) => {
      return { ...person, age: newPerson.age + 1 };
    });
  }
  return (
    <>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{person.phoneNo}</p>
      <p>{person.email}</p>
      <p>{person.age}</p>
      <button onClick={changeAge}>Change Age</button>
    </>
  );
}

export default SimpleExampleObject;
