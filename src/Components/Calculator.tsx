import * as React from 'react';
import Numbers from './Numbers';

export interface IAppProps {
 handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
 displayValue: any;
 setDisplayValue: (value: any) => void;
 currentValue: number;
 setCurrentValue: (value: number) => void; 
}

export default function Calculator (props: IAppProps) {


  return (
    <div className='whole-calculator'>
      <div id="screen" className='screen-display' data-role={"display"}>{props.displayValue || props.currentValue}</div>
      <div className='all-btns'>
        <Numbers handleClick={props.handleClick}/>
        <button onClick={(e) => props.handleClick(e)} value={0}>0</button>
        <div className='fnct-btns'>
          <button onClick={(e) => props.handleClick(e)} value={"+"}>+</button>
          <button onClick={(e) => props.handleClick(e)} value={"-"}>-</button>
          <button onClick={(e) => props.handleClick(e)} value={"*"}>*</button>
          <button onClick={(e) => props.handleClick(e)} value={"/"}>/</button>
          <button onClick={(e) => props.handleClick(e)} value={"="}>=</button>
        </div>
      </div>
    </div>
  );
}

