import * as React from 'react';
import Numbers from './Numbers';

export interface IAppProps {
}

export default function Calculator (props: IAppProps) {
  return (
    <div>
      <table>
        <tr>
          <td>
            <input type={"text"} id={"result"} />
          </td>
        </tr>
        <tr>
          <td>
            <input type={"button"} value={1}></input>
            <input type={"button"} value={2}></input>
            <input type={"button"} value={3}></input>
          </td>
        </tr>
        <tr>
          <td>
            <input type={"button"} value={4}></input>
            <input type={"button"} value={5}></input>
            <input type={"button"} value={6}></input>
          </td>
        </tr>
        <tr>
          <td>
            <input type={"button"} value={7}></input>
            <input type={"button"} value={8}></input>
            <input type={"button"} value={9}></input>
          </td>
        </tr>
      </table>
    </div>
  );
}

