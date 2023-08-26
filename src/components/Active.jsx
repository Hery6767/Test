import React from 'react'
import List from './pages/List'
function Active({setValue,data,handleAddClick,value}) {
  
  return (
    <div className='home'>
    <div className='addTodo'>
    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='add details'/>
    <button onClick={handleAddClick} >Add</button>
    </div>
    <List data={data}/>
    </div>
  )
}

export default Active