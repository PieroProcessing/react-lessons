import React from "react";
import Child from "../Child";

interface Props {
  [key: string]: any;
  callback: (attr: any)=> void
}

const ParentSibling = (props: Props): JSX.Element =>{
  console.log('i\'m parent  sibling', props)
  
  return (
    <div className="border">
      <div className="p-y5 ">
        <span onClick={() => props.callback("I'm parent sibling")}>
          I'm parent sibling
        </span>
        <div className="d-flex flex-row">
          <Child
            isActive={true}
            element={{ id: "This is Child inside", age: 46 }}
          />
          {props.children({
            isActive: true,
            element: { id: "this is with clone", age: 46 },
            backgroundColor: "red",
          })}        
        </div>
      </div>
    </div>
  );
}

export default ParentSibling;