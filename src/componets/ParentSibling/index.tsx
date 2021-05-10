import React from "react";


interface Props {
  [key: string]: any;
}

const ParentSibling = (props: Props): JSX.Element =>{
  console.log('i\'m parent  sibling')
  
  return (
    <>
    { 
      React.Children.map(props.children, child => React.cloneElement(child,{ isActive: true, element: { id: 'Test', age: 46 }, backgroundColor: 'red'}))
    }
    </>
  );
}
export default ParentSibling;