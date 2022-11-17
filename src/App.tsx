import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import './css.css'

function App() {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const handleClick = (value: any, state: number) => {
    console.log(state, "passed state")
    console.log(sum, "inside sum")
   
    let display = displayValue > 0 ? `${currentValue}${value}` : value;

    if(value === "+") {
      setSum(currentValue + state);
      setCurrentValue(0);
    } else if(value === "-") {
      setSum(currentValue - state);
      setCurrentValue(0);
    } else if(value === "*") {
      setSum(currentValue * state);
      setCurrentValue(0);
    } else if(value === "/") {
      setSum(currentValue / state);
      setCurrentValue(0);
    } else if(value === "=") {
      setDisplayValue(sum);
      setCurrentValue(sum);
    } else if(value === "c") {
      setSum(0);
      setDisplayValue(0);
      setCurrentValue(0);
    } else {
      setDisplayValue(display);
      setCurrentValue(display);
      setSum(display);
    }
    console.log(currentValue, "current")
    console.log(displayValue, "display")
    console.log(sum, "sum")
  }

  return (
    <div className="App">
      <h1>The Second Best Calculator In The World!</h1>
      <Calculator 
        handleClick={handleClick} 
        displayValue={displayValue} 
        setDisplayValue={setDisplayValue}
      />
    </div>
  );
}

export default App;
