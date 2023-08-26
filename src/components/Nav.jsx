import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>
      <ul className='nav'>
    
      <li className='navItem'>
      <Link to="/"><h4>All</h4></Link>
      </li>
      <li className='navItem'>
      <Link to="/active"><h4>Active</h4></Link>
      </li>
      <li className='navItem'>
      <Link to="/completed"><h4>Completed</h4></Link>
      </li>

      </ul> 
      </div>
  )
}

export default Nav