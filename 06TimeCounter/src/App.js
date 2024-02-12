import './App.css';
import { useState } from 'react';
function App() {

  const [step,setSteps] = useState(1);
  const [count,setCount] = useState(0);

  const date = new Date('May 24 2024')
  date.setDate(date.getDate() + count)

  function countAdd(){
    setCount((c) => c + step)
  }
  function countSub(){
    setCount((c) => c - step)
  }

  return (    
    <div>
    <div className='step' >
    <h3>Steps</h3>
    <button onClick={() => setSteps((c) => c + 1)} >+</button>
    <h2>{step}</h2>
    <button onClick={() => setSteps((c) => c - 1)} >-</button>
    </div>
    <div className='count' >
    <h3>Count</h3>
    <button onClick={countAdd} >+</button>
    <h3>{count}</h3>
    <button onClick={countSub} >-</button>
</div>
<h1>{count === 0 ? "Today is ": count > 0 ? `${count} days from today is ` : `${count} days ago was`}{date.toDateString()}</h1>
    </div>
    
  );
}



export default App;


