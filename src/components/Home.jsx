import React, { useState } from 'react'
import List from './pages/List'
function Home({setValue,data,handleAddClick,value,setData}) {

  return (
    <div className='home'>
    <div className='addTodo'>
    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='add details'/>
    <button onClick={handleAddClick} >Add</button>
    </div>
    <List data={data} setData={setData}/>
    </div>
  )
}

export default Home