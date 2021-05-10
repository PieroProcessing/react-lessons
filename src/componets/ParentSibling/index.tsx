import React from "react";
import Child from "../Child";


const  ParentSibling = (): JSX.Element =>{
  console.log('I\'m parent  sibling')
  
  return (
    <>
      <div>I'm parent sibling</div>
      <Child />
      <Child />
    </>
  )
  
}

export default ParentSibling;