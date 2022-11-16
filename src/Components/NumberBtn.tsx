import * as React from 'react';

export interface INumberBtnProps {
  value: number; 
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NumberBtn (props: INumberBtnProps) {
  return (
    <div>
      <button value={props.value} onClick={(e) => props.handleClick(e)}>{props.value}</button>
    </div>
  );
}
