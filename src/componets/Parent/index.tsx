import React from 'react' ;
import { Child } from '..';

interface Props {
  [key: string]: any;
}
const Parent = (props: Props):JSX.Element => {
  console.log(`I'm parent`, props);
  const variableInParent = "variableInParent";
  return (
    <div className="border">
      <div>I'm parent</div>
      {["test1", "test2"].map((el, index) => (
        <Child key={index} isActive={true} element={{ id: el, age: 46 }} />
      ))}
      {React.Children.map(props.children, (child)=> child)}
      {React.cloneElement( <Child isActive={true} element={{ id: 'this is child with optional prop', age: 30 }} />, {
        variableInParent
      })} 
    </div>
  );
  
}

export default Parent;