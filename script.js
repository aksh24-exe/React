console.log("Hello World");
const head = document.getElementById("head");

//type, props, children
// const el = React.createElement("h1",null,"Hello World")

function hello(){
    return <h1>Hello World</h1>;
}

ReactDOM.createRoot(head).render(hello());
