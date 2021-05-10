import React from 'react' ;
import Child from '../Child';

const Parent = ():JSX.Element=>{

    return (
      <div>
        i'm parent
        {
        ['test1', 'test2', 'test3'].map((el, index) => <Child 
                key={index}
                isActive={true}
                element={{id: el, age: 46}}      
                />)
        }      
      </div>
    );
}
export default Parent;