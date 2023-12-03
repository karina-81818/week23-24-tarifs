import { useState } from 'react'
import './App.scss'
import Tarif from "./Tarifs/Tarif/"
import data from './data.json'

function App() {
  const [id, setId] = useState(0); 
  return (
    <div className="App">
      {data.map((item, index)=><Tarif item = {item} key = {index} activeCard={item.id===id} setId = {setId}
      />)}
    </div>
  )
}
export default App
