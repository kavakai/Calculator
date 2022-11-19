import * as React from 'react';
import Numbers from './Numbers';

export interface IAppProps {
 handleNumbers: (num: number) => void;
 calculate: (value: string) => void;
 displayValue: any;
}

export default function Calculator (props: IAppProps) {
  return (
    <div className='whole-calculator'>
      <div id="screen" className='screen-display' data-role={"display"}>{props.displayValue}</div>
      <div className='all-btns'>
        <Numbers handleNumbers={props.handleNumbers} displayValue={props.displayValue}/>
        <div className='zero-clear-btns'>
          <button onClick={() => props.handleNumbers(0)} value={0}>0</button>
          <button onClick={() => props.calculate("c")} value={"c"}>C</button>
          <button onClick={() => props.calculate("=")} value={"="}>=</button>
        </div>
        <div className='fnct-btns'>
          <button onClick={() => props.calculate("+")} value={"+"}>+</button>
          <button onClick={() => props.calculate("-")} value={"-"}>-</button>
          <button onClick={() => props.calculate("*")} value={"*"}>*</button>
          <button onClick={() => props.calculate("/")} value={"/"}>/</button>
        </div>
      </div>
    </div>
  );
}

