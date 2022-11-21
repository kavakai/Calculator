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
    if(value === "="){
      setDisplayValue(eval(displayValue).toFixed(12))
    }else if(value === "c") {
      setDisplayValue(0)
    } else {
      setDisplayValue(`${displayValue}${value}`)
    }
  } 

  return (
    <div className="App">
      <h1>The Second Best Calculator In The World!</h1>
      <Calculator 
        calculate={calculate} 
        handleNumbers={handleNumbers}
        displayValue={displayValue} 
      />
    </div>
  );
}

export default App;
