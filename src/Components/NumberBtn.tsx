import * as React from 'react';

export interface INumberBtnProps {
  value: number; 
  handleNumbers: (num: number) => void;
}

export default function NumberBtn (props: INumberBtnProps) {
  return (
    <div>
      <button value={props.value} onClick={() => props.handleNumbers(props.value)}>{props.value}</button>
    </div>
  );
}
