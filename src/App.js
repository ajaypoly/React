import "./App.css";
import Random from "./Random";
import New from "./New";
import { useState } from "react";
import React from 'react'

function App() {

  const [name ,setName]=useState('abc')
  const [value,setValue]=useState('efgf')
  return (
    <div>
      <Random data={name}
      item={value}/>
    </div>
  )
}

export default App