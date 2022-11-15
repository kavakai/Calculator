import * as React from 'react';

export interface INumberBtnProps {
  value: number; 
}

export default function NumberBtn (props: INumberBtnProps) {
  return (
    <div>
      <button>{props.value}</button>
    </div>
  );
}
