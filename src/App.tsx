import React from 'react';
import Calculator from './Components/Calculator';
import './css.css'

function App() {

  const handleClick = (e:any) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h1>The Second Best Calculator In The World!</h1>
      <Calculator handleClick={handleClick}/>
    </div>
  );
}

export default App;
