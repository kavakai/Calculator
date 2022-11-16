import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import './css.css'

function App() {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (e:any) => {
    setDisplayValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>The Second Best Calculator In The World!</h1>
      <Calculator 
        handleClick={handleClick} 
        displayValue={displayValue} 
        setDisplayValue={setDisplayValue}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />
    </div>
  );
}

export default App;
