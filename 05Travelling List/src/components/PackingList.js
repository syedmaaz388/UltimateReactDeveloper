import React, { useState } from 'react'
import Item from './Item';


function PackingList({taskList,DeleteItem,handleToggleItem,handleAllClearList}) {

    const [SortBy,setSortBy] = useState('input');

    let sortedItems;
    if(SortBy === "input") sortedItems = taskList;
  
    if(SortBy === 'description') sortedItems = taskList.slice().sort((a,b) => a.description.localeCompare(b.description));
  
    if(SortBy === "packed") sortedItems = taskList.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
  return (
    <div className='list' >
    <ul>
    {sortedItems.map((item) => (
      <Item key={item.id} item={item} DeleteItem={DeleteItem} handleToggleItem={handleToggleItem} />
      ))}
    </ul>
    <div className='actions'>
  <select value={SortBy} onChange={(e) => setSortBy(e.target.value)}>
    <option value="input">Sort By Input Order</option>
    <option value="description">Sort By description</option>
    <option value="packed">Sort by packed status</option>
  
  </select>
  <button onClick={handleAllClearList} >Clear List</button>
    </div>
    </div>
  )
}

export default PackingList
