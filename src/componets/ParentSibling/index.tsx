import React from "react";
import { Child } from "..";



const  ParentSibling = (): JSX.Element =>{
  console.log('I\'m parent  sibling')
  
  return (
    <div className="border">
      <div className="p-y5 ">
        <span>I'm parent sibling</span>
        <div className="d-flex flex-row">
          <Child />
          <Child />
        </div>
      </div>
    </div>
  );
  
}

export default ParentSibling;