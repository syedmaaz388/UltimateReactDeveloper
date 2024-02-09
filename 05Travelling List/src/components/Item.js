import React from 'react'

function Item({item,DeleteItem,handleToggleItem}) {
  return (
    <>
      <li> 
  <input type="checkbox"  value={item.packed} onChange={() => handleToggleItem(item.id)} />
  <span style={item.packed ? {textDecoration:"line-through"}:{}} >{item.quantity}-{item.description}</span>
  <button onClick={() => DeleteItem(item.id)} >❌</button>
  </li>
    </>
  )
}

export default Item
