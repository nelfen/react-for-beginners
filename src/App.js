import { useEffect, useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) =>[toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);
  return ( 
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="write your to do..."/>
    <button>Add To Do 726</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item) => <li>{item}</li>)}
    </ul>
  </div>
  );
}
export default App;
