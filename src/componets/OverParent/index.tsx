import React from 'react' ;
import { Parent, ParentSibling, Child } from '../index'

const OverParent = ():JSX.Element => {
    console.log('this is OverParent message: ');
    const handleCallback = (txt: string)=> console.log('this is callback message: ', txt)
    return (
      <div className="row text-center ">
        <div className="col-12 py-5">I'm overparent</div>
        <div className="col py-5 border">
          <Parent > 
              <div> this is children array 1</div>
              <div> this is children array 2</div>
          </Parent>
        </div>
        <div className="col py-5 border">
          <ParentSibling  callback={handleCallback} >
            {(attr: any)=> <Child {...attr} />}
          </ParentSibling>
        </div>
      </div>
    );
}
export default OverParent;