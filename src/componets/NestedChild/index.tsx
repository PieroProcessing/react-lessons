import React, { ChangeEvent } from "react";

interface Props {
  [key: string]: any;
  onChange: (e:ChangeEvent<HTMLInputElement>)=> void
}

const NestedChild = (props: Props): JSX.Element => {
  console.log("i'm nested  child");
  return (
    <div>
      <label>i'm input label in nested child</label>
      <input 
      type='text' 
      name='questoInput' 
      onChange={props.onChange}/>
    </div>
  );
}
export default NestedChild;