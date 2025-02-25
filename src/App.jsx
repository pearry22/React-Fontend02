// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";

function App() {
  const helloData= [
    {name: 'Pearry', message:'Hi...'},
    {name: 'Ohm', message:'Hi...'}
  ];

  return (
    <div className="App">
      <Counter/>
      {helloData.map((data,index)=>(
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      < Contact email= "pearry.200228@gamil.com" phone="0983967928" />
    </div> 
  );
    }

export default App
