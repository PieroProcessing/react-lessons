import React from "react";



const ParentSibling = (props: Props): JSX.Element =>{
  console.log('i\'m parent  sibling')
  
  return (
       <div className="border">
      <div className="p-y5 ">
        <span>I'm parent sibling</span>
        <div className="d-flex flex-row">
    { 
      React.Children.map(props.children, child => React.cloneElement(child,{ isActive: true, element: { id: 'Test', age: 46 }, backgroundColor: 'red'}))
    }
    </div>
      </div>
    </div>
  );
}

export default ParentSibling;