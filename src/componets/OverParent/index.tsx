import React from 'react' ;
import { Parent, ParentSibling, Child } from '../index'

const OverParent = ():JSX.Element => {

    return (
         <div className="row text-center ">
      <div className="col-12 py-5">I'm overparent</div>
      <div className="col py-5 border">
            <Parent />
              </div>
      <div className="col py-5 border">
            <ParentSibling> 
                <Child isActive={true} element={{ id: 'Test', age: 46 }}/>
                <Child isActive={true} element={{ id: 'Test', age: 46 }}/>
                <Child isActive={true} element={{ id: 'Test', age: 46 }}/>
            </ParentSibling>
         </div>
    </div>
    );
}
export default OverParent;