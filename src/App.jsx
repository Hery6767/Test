import { useState } from 'react'
import Title from './components/title'
import Nav from './components/Nav'
import Home from './components/Home'
import Completed from './components/Completed'
import Active from './components/Active'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [ value,setValue] = useState("");
  const [data,setData] = useState([]);
   const handleAddClick = () => {
     const newTodo = {
       text: value,
       active: false
     };
     setData((prev) => {
       return[...prev, newTodo]
     });
     setValue("");
   }
  return (
    <div className="appTodo">
      <Router>
        <Title />
        <Nav />
        <Routes>

          <Route path="/" element={<Home setData={setData} data={data} 
          handleAddClick={handleAddClick} setValue={setValue} value={value}/>} />
          <Route path="/active" element={<Active setData={setData} data={data} 
          handleAddClick={handleAddClick} setValue={setValue} value={value}/>} />
          <Route path="/Completed" element={<Completed data={data} setData={setData}/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
