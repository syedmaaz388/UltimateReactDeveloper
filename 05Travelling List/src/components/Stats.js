import React from 'react'

function Stats({taskList}) {

    
  if(!taskList.length)
  return (
<p className='stats'>
  <em>Start adding some items to your packing list</em>
</p>
    )

    const numItems = taskList.length;
    const numPacked = taskList.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked/numItems) * 100)

  return (
    <div>
       <footer className='stats' >
      <em>{percentage === 100 ? "You got everything! Ready to go +" : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}</em>
    </footer>
    </div>
  )
}

export default Stats
