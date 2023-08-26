import React, { useState } from 'react'

function Item({text,id, data,setData}) {
  const [checked, setChecked] = useState(false)
  console.log('check',checked)
  const handleCheckClick = (event) => {
  setChecked({...checked,[event.target.value] : event.target.checked});
  }  
  const handleRemoveItem = () => {
    const currentData = data;
    const newData = currentData.filter((item) => item.id !== id);
      setData(newData);
    };
  
  return (
    <div className='item'>
    <div className='checkbox'>
    <input type='checkbox' value={id} onChange={handleCheckClick}/>
    </div>
    <div>
    <h3 className={`${(setChecked === true) ? 'text': ''}`}>
    {text}
    </h3> 
    </div>
    <div className='btn'>
    <button onClick={handleRemoveItem}><img src='../src/components/image/trash-bin.png'/></button>
    </div>
    </div>
  )
}

export default Item