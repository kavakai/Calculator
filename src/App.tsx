import { sign } from 'crypto';
import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import './css.css'

function App() {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const handleNumbers = (num: number) => {
    console.log(num, "numbers")
  }
  
  const calculate = (value: string) => {
    console.log(value, "calc")

    // if(value === "+") {
     
    // } else if(value === "-") {
      
    // } else if(value === "*") {
      
    // } else if(value === "/") {
      
    // } else if(value === "=") {
     
    // } else if(value === "c") {

    // }
  } 

  return (
    <div className="App">
      <h1>The Second Best Calculator In The World!</h1>
      <Calculator 
        calculate={calculate} 
        handleNumbers={handleNumbers}
        displayValue={displayValue} 
        setDisplayValue={setDisplayValue}
      />
    </div>
  );
}

export default App;
