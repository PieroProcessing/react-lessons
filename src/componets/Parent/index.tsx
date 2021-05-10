import React from 'react' ;
import Child from '../Child';

const Parent = ():JSX.Element => {
  console.log(`I'm parent`);

  return (
    <>
    <div>I'm parent</div>
    <Child />
    </>
  )
  
}

export default Parent;