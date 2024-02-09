import React, { useState } from 'react'


function Form({taskList,setTasklist,DeleteItem}) {

    const [description,setDescription] = useState("");
    const [quantity,setQuantity] = useState(1);
  
    function handleSubmit(e){
      e.preventDefault();
  
      if(!description) return;
      const newItem = {
        description,
        quantity,
        packed:false,
        id:Math.random() * 1000000000
      }
      console.log(newItem)
      setTasklist([...taskList,newItem])
      setDescription("");
      setQuantity(1);
  
    }

  return (
    <div>
       <form className='add-form' onSubmit={handleSubmit} >
   <h3>What do you need for your trip?</h3>
  <select value={quantity}  onChange={(e) => setQuantity(Number(e.target.value))} >
    {Array.from({length:20},(_,i) => i + 1).map((num) => <option key={num} >{num}</option> )}
  </select>
  <input type="text"
   placeholder='Item...' 
   value={description}
   onChange={(e) => 
   {setDescription(e.target.value);
   }}
   />
  <button>Add</button>
  </form>
    </div>
  )
}

export default Form
