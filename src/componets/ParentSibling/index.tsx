import React from "react";
import { Child } from "..";



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