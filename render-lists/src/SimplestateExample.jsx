import { useState } from "react";
function SimplestateExample() {
  const returnValue = useState("Akshat");
  const firstName = returnValue[0];
  const functioreturntochange = returnValue[1];
  function handleclick() {
    if (firstName === "Akshat") functioreturntochange("parul");
    else functioreturntochange("Akshat");
  }
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={handleclick}>Click here</button>
    </>
  );
}

export default SimplestateExample;

// const Users = [
//   { id: 1, firstName: "Akshat", lastName: "Sharma" },
//   { id: 2, firstName: "Parul", lastName: "Dhankhar" },
//   { id: 3, firstName: "Pawan", lastName: "Maharwal" },
//   { id: 4, firstName: "Archit", lastName: "Jain" },
// ];
// through map method
// jsx : in jsx when we write js we write in {}
// function App() {
//   return <div className="App">
//     {/* 1st Way */}
//     {
//       // Map function take one callback object
//       // Users.map((user)=>{
//       //   return <User firstName={user.firstName} lastName={user.lastName}/>
//       // })
//     }
//     {/* 2nd Way  */}
//     {/* {
//       Users.map(user => <User firstName={user.firstName} lastName={user.lastName}/>)
//     } */}
//     {
//       Users.map((user) => <User {...user} key={user.id}/>)
//     }

//   </div>;
// }

// One by One

// function App() {
//   return (<div className="App">
//     <User firstName={Users[0].firstName} lastName={Users[0].lastName}/>
//     <User firstName={Users[1].firstName} lastName={Users[1].lastName}/>
//     <User firstName={Users[2].firstName} lastName={Users[2].lastName}/>
//     <User firstName={Users[3].firstName} lastName={Users[3].lastName}/>
//   </div>
//   );
// }
