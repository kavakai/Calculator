import * as React from 'react';
import Numbers from './Numbers';

export interface IAppProps {
 handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Calculator (props: IAppProps) {


  return (
    <div className='whole-calculator'>
      <span className='screen-display' data-role={"display"}>0</span>
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

