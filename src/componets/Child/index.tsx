import React from 'react'

interface Props {
  [key: string]: any;
  isActive: boolean;
  element: { id: string; age: number };
}

const Child = (props: Props): JSX.Element => {
    
    return (
      <div id={props.element.id} style={{ backgroundColor: props.backgroundColor}}>
        i'm child. My name is {props.element.id}.
      </div>
    );
}
export default Child 