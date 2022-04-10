import './App.css';
import Random from './Random';
import New from './New';
import {useState} from 'react'



function App() {
  const [counter,setCounter]=useState(0)

  const [data, setData]=useState(10)
  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    setData(data-1)
  }
  function reset(){
    setCounter(1)
    setData(10)
  }
  
  return (


  <div>
     <h1>{counter}</h1>
     <h2>{data}</h2>
     <button onClick={reset}>Reset</button>
     <button onClick={increment}>Click mee</button>
     <button onClick={decrement}> don,t</button>
  </div> 
    
  );
}

export default App;
