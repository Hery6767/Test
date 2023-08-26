import React from 'react'
import Item from './Item'
function List({data,setData}) {

  return (
    <div className='list'>

    {data.map((item) => {
      return ( 
        <Item text={item.text} id={item.id} active={item.active} /> 
      );
    })}
    
    </div>
  )
}

export default List