import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setlist] = useState([]);
  const [currenttask, setcurrenttask] = useState("");
  let addtask = () => {
    setlist([
      ...list,
      { id: list.length + 1, name: currenttask, isDone: false}
    ]);
    setcurrenttask("");
  }
  let markDone = (id) => {
    let itemIndex = list.findIndex((obj) => obj.id ===id);
    list[itemIndex].isDone = !list[itemIndex].isDone;
    setlist([...list]);

  };
  let markUnDone = (id) => {
    let itemIndex = list.findIndex((obj) => obj.id ===id);
    list[itemIndex].isDone = false;
    setlist([...list]);

  }
  let removetask =(id) => {
    let itemIndex = list.findIndex((obj) => obj.id ===id);
    let newlist = list;
    newlist.splice(itemIndex,1);
    setlist([...list]);

  }
  return (
    <div className="task">
      <input
      type="text"
      value={currenttask}
      onChange={(e) => setcurrenttask(e.target.value)}
      ></input>
      <button onClick={addtask}>add</button>
      <ul>
        {list.map((inn, index) => {
          return (
            <li key={index} className={inn.isDone ? "mark-done" : ""}>
              {inn.name}-{""}
              <button onClick={() => markDone(inn.id)}>Done</button>
              <button onClick={() => markUnDone(inn.id)}>Undone</button>
              <button onClick={() => removetask(inn.id)}>Delete</button>
            </li>

          );
        })}
        <button>save</button>
      </ul>

    </div>
  );
}

export default App;
