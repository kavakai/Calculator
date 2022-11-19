import { sign } from 'crypto';
import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import './css.css'

function App() {
  const [displayValue, setDisplayValue] = useState<any>(0);

  const handleNumbers = (num: number) => {
    if(displayValue === 0 && num !== 0) {
      setDisplayValue(num);
    } else {
      setDisplayValue(`${displayValue}${num}`);
    }
  }
    
  
  const calculate = (value: string) => {
    if(value === "+") {
      setDisplayValue(`${displayValue}${value}`)
    } else if(value === "-") {
      setDisplayValue(`${displayValue}${value}`)
    } else if(value === "*") {
      setDisplayValue(`${displayValue}${value}`)
    } else if(value === "/") {
      setDisplayValue(`${displayValue}${value}`)
    } else if(value === "=") {
      setDisplayValue(eval(displayValue))
    } else if(value === "c") {
      setDisplayValue(0)
    }
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
