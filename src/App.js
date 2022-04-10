import "./App.css";
import Random from "./Random";
import New from "./New";
import { useState } from "react";
import React from 'react'

function App() {

  const [name ,setName]=useState()
  const [value,setValue]=useState()
  const data =[
    {name:'ajay', age:22},
    {name:'akhil', age:22},
    {name:'anil', age:24},
    {name:'disan', age:25},
    {name:'jibin', age:27},
    {name:'sarath', age:27},
    {name:'joffin', age:29},
  ]


  return (
    <div>
      {data.map((item)=>(
        <>
        <h1>{item.name}</h1>
        <span>age:{item.age}</span>
        </>
      )
      )}
    </div>
  )
}

export default App