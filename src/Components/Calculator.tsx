import * as React from 'react';
import Numbers from './Numbers';

export interface IAppProps {
}

export default function Calculator (props: IAppProps) {
  return (
    <div className='whole-calculator'>
      <span className='screen-display' data-role={"display"}>0</span>
      <Numbers />
    </div>
  );
}

