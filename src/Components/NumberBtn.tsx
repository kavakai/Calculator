import * as React from 'react';

export interface INumberBtnProps {
  value: number; 
  handleClick: (value: any, state: number) => void;
  displayValue: any;
}

export default function NumberBtn (props: INumberBtnProps) {
  return (
    <div>
      <button value={props.value} onClick={() => props.handleClick(props.value, props.displayValue)}>{props.value}</button>
    </div>
  );
}
