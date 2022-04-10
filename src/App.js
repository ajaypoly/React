import './App.css';
import Random from './Random';
import New from './New';
import {useState} from 'react'



function App() {
  const [counter,setCounter]=useState(0)
  function increment(){
    setCounter(counter+1)
  }
  
  return (


  <div>
     <h1>{counter}</h1>

     <button onClick={increment}>Click mee</button>
  </div> 
    
  );
}

export default App;
