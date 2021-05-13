import React, { useState } from 'react' ;
import { Child } from '..';

interface Props {
  [key: string]: any;
}
const Parent = (props: Props):JSX.Element => {
  const [element, setElement] = useState<string>();
  const variableInParent = "optional variableInParent";
  return (
    <div className="border">
      <div>I'm parent</div>
      <div>
        <label>input text for state element</label>
        <input type='text' onChange={({target:{value}})=>setElement(value)}/>
      </div>
      {["child1 with map", "child2 with map"].map((el, index) => (
        <Child key={index} isActive={true} element={{ id: element || el, age: 46 }} />
      ))}
      {React.Children.map(props.children, (child)=> child)}
      {React.cloneElement( <Child isActive={true} element={{ id: 'this is child with optional prop', age: 30 }} />, {
        variableInParent
      })} 
    </div>
  );
  
}

export default Parent;