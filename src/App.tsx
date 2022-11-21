import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import './css.css'

function App() {
  //There are probably many better methods to create a calculator, but I am trying to keep this as simple as possible. 
  const [displayValue, setDisplayValue] = useState<any>(0);

  const handleNumbers = (num: number) => {
    if(displayValue === 0 && num !== 0) {
      setDisplayValue(num);
    } else {
      setDisplayValue(`${displayValue}${num}`);
    }
  } 
  
  const calculate = (value: string) => {
    // for a simple calculator I will use the eval() fnct. But would most likely write code differently for other uses.

    if(value === "="){
      if(eval(displayValue).toString().length >= 7) {
        setDisplayValue(eval(displayValue).toFixed(11));
      } else {
        setDisplayValue(eval(displayValue));
      }
    }else if(value === "c") {
      setDisplayValue(0)
    } else {
      setDisplayValue(`${displayValue}${value}`)
    }
  } 

  return (
    <div className="App">
      <h1>The Second Best Calculator In The World!</h1>
      {/* trying to keep things organized with multiple components */}
      <Calculator 
        calculate={calculate} 
        handleNumbers={handleNumbers}
        displayValue={displayValue} 
      />
    </div>
  );
}

export default App;
