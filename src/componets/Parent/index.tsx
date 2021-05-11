import React from 'react' ;
import { Child } from '..';


const Parent = ():JSX.Element => {
  console.log(`I'm parent`);

  return (
    <div className='border'>
      <div>I'm parent</div>
      <Child />
    </div>
  )
  
}

export default Parent;