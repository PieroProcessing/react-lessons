import React from 'react'

interface Props {
  [key: string]: any;
  isActive: boolean;
  element: { id: string; age: number };
}

const Child = (props: Props): JSX.Element => {
    console.log("i'm child", props.element.id);
    return (
      <div id={props.element.id} className='col py-5 border' style={{ backgroundColor: props.backgroundColor}}>
        i'm child. My name is {props.element.id}.
        {props?.variableInParent || null}
      </div>
    );
}

export default Child 