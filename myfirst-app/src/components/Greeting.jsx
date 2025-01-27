import "./Greeting.css";
import Showgreeting from "./Showgreeting";

function Greeting(props) {
  return <>
  <Showgreeting {...props}/>
  </>;
}

// function Greeting(props){
//     // const firstName = "Akshat";
//     const firstName = props.firstName;
//     const lastName = props.lastName;
//     return <>

//     <div className="bg-dark">
//         <h1>Hello {firstName} {lastName}</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam.</p>
//     </div>
//     </>
// }

// function Greeting({firstName, lastName}){
//     // const firstName = "Akshat";
//     return <>

//     <div className="bg-dark">
//         <h1>Hello {firstName} {lastName}</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam.</p>
//     </div>
//     </>
// }

export default Greeting;
