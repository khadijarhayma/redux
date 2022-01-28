import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTask, deleteTask, doneTask } from "./JS/ACTIONS/TaskAction";

function App() {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const tasktomap = useSelector((state) => state.todolist);
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1> workshop REDUX</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          placeholder="ADD NEW TASK"
          onChange={(e) => settext(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addTask({ text: text, id: Math.random(), isDone: false }))
          }
        >
          ADD
        </button>
      </div>
      {tasktomap.map((el) => (
        <div>
          <h1
            onClick={() => dispatch(doneTask(el.id))}
            className={el.isDone ? "green" : "red"}
          >
            {el.text}
          </h1>
          <p>{el.isDone ? "DONE" : "NOTDONE"} </p>
          <button onClick={() => dispatch(deleteTask(el.id))}> DELITE</button>
        </div>
      ))}
    </div>
  );
}

export default App;
