import * as React from 'react';
import Numbers from './Numbers';

export interface IAppProps {
 handleClick: (value: any, state: number) => void;
 displayValue: any;
 setDisplayValue: (value: any) => void;
}

export default function Calculator (props: IAppProps) {
  return (
    <div className='whole-calculator'>
      <div id="screen" className='screen-display' data-role={"display"}>{props.displayValue}</div>
      <div className='all-btns'>
        <Numbers handleClick={props.handleClick} displayValue={props.displayValue}/>
        <button onClick={() => props.handleClick(0, props.displayValue)} value={0}>0</button>
        <div className='fnct-btns'>
          <button onClick={() => props.handleClick("+", props.displayValue)} value={"+"}>+</button>
          <button onClick={() => props.handleClick("-", props.displayValue)} value={"-"}>-</button>
          <button onClick={() => props.handleClick("*", props.displayValue)} value={"*"}>*</button>
          <button onClick={() => props.handleClick("/", props.displayValue)} value={"/"}>/</button>
          <button onClick={() => props.handleClick("=", props.displayValue)} value={"="}>=</button>
        </div>
      </div>
    </div>
  );
}

