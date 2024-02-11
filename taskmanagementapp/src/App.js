import './App.css';
import { useState } from 'react';

function App() {
  const [task,settask] = useState("");
  const [quantity,setQuantity] = useState(1);
  const [taskList,setTaskList] = useState([]);

  const [SortBy,setSortBy] = useState('Quantity');
  let sortedItems;
  if(SortBy === "Quantity") sortedItems = taskList;

  if(SortBy === 'Description') sortedItems = taskList.slice().sort((a,b) => a.name.localeCompare(b.name));

  if(SortBy === "Completed") sortedItems = taskList.slice().sort((a,b) => Number(a.completed) - Number(b.completed));
  const handleSubmit = (e) => {
    e.preventDefault();
    const Task = {
     name:task,
     quantity:quantity,
     id:Math.random() * 1000,
     completed:false
    }
    setTaskList([...taskList,Task]);
    settask("")
    setQuantity(1)
  }

  const deleteFunction = (id) => {
   setTaskList(taskList.filter((value) => value.id !== id))
  }

  const completed = (id) => {
    setTaskList(taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  

  return (
    <div className="App">
    <div className="box">
      <div className='form' >
         <input type="text" value={task} onChange={(e) => settask(e.target.value)} />
         <select value={quantity} onChange={(e) => setQuantity(e.target.value)} >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
         </select>
         <button onClick={handleSubmit} >Add</button>
      </div>
      <div className="box2">
      <div className="list">
        {sortedItems.map((tasks) => (
          <div className='lili' >
      <input onClick={() => completed(tasks.id)} type="checkbox" value={task.completed}/>
      <p className={tasks.completed ? 'completed' : ''}>{tasks.quantity} - {tasks.name}</p>
        <button onClick={() => deleteFunction(tasks.id)} >❌</button>
      </div>
        ))}
      </div>
     
     
      </div>
      <div className="sortButton">
        <select value={SortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Quantity">Sort By Quantity</option>
          <option value="Description">Sort By Description</option>
          <option value="Completed">Sort By Completed</option>
        </select>
      </div>
    </div>   
    </div>
  );
}

export default App;
