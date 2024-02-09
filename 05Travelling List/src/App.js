import './App.css';
import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';


function App() {
  const [taskList,setTasklist] = useState([]);

 const DeleteItem = (id) => {
  setTasklist(taskList.filter(item => item.id !== id))
 }

 const handleToggleItem = (id) => {
     setTasklist(taskList => taskList.map(item => item.id === id ? {...item,packed: !item.packed}: item))
 }

 function handleAllClearList(){
  const confirmed = window.confirm("Are you sure you want to delete all items?") 
  if(confirmed) setTasklist([])
 }

  return (    
    <div>
<Logo/>
<Form  DeleteItem={DeleteItem}taskList={taskList} setTasklist={setTasklist} />
<PackingList handleAllClearList={handleAllClearList} taskList={taskList} handleToggleItem={handleToggleItem} DeleteItem={DeleteItem} />
<Stats taskList={taskList} />
    </div>
    
  );
}

export default App;


