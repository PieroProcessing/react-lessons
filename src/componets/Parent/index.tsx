import React from 'react' ;
import { Child } from '..';


const Parent = ():JSX.Element => {
  console.log(`I'm parent`);

  return (
    <div className='border'>
      <div>I'm parent</div>
          {
        ['test1', 'test2', 'test3'].map((el, index) => <Child 
                key={index}
                isActive={true}
                element={{id: el, age: 46}}      
                />)
        }  
    </div>
  )
  
}

export default Parent;