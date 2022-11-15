import * as React from 'react';
import NumberBtn from './NumberBtn';

export interface INumbersProps {
}

export default function Numbers (props: INumbersProps) {
  const nums = [1,2,3,4,5,6,7,8,9];

  const numBtns = nums.map(num => {
    return <NumberBtn
      value= { num } 
    />
  })
  return (
    <div className='btn-container'>
      { numBtns }
    </div>
  );
}
