import './App.css';
import { useState } from 'react';


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [steps,setSteps] = useState(1);
  const [isOpen,setOpen] = useState(true);

  


  function AddCount(){
    if(steps < 3){
    setSteps(steps + 1);
    }
  }

  function RemoveCount(){
    if(steps > 1){
    setSteps(steps - 1)
    }
  }

 

  return (
    <>
    <div>
    <button onClick={() =>setOpen(!isOpen)} >Button</button>
    
   {isOpen && <div className="steps">
      <div className='numbers'>
      <div className={`${steps >= 1 ? "active":""}`}>1</div>
      <div className={`${steps >= 2 ? "active":""}`}>2</div>
      <div className={`${steps >= 3 ? "active":""}`}>3</div>
      </div>
      <SendMessage steps={steps}>
     {messages[steps-1]}
      </SendMessage>
      <div className='buttons'>
      <Button
      bgColor="#7950f2"
      textColor="#fff"
      onClick={RemoveCount}>
       
      <span>👈</span>Previous </Button>
      <Button 
      bgColor="#7950f2"
      textColor="#fff"
      onClick={AddCount} > Next<span>👉</span> </Button>
      </div>
    </div>}
    </div>
    </>
  );
}



export default App;

function Button({bgColor,textColor,onClick,children}){
  return(
    <>
    <button style={{backgroundColor:bgColor, color:textColor}} onClick={onClick}>
  {children}
    </button>
    </>
  )
}

function SendMessage({steps,children}){
  return(
    <div>
      <p className='message'> {steps} - {children}</p>
    </div>
  )
}


