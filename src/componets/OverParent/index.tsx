import React from 'react' ;
import { Parent, ParentSibling } from '..';

const OverParent = ():JSX.Element => {
  console.log(`I'm overparent`);

  return (
    <div className="row text-center ">
      <div className="col-12 py-5">I'm overparent</div>
      <div className="col py-5 border">
        <Parent />
      </div>
      <div className="col py-5 border">
        <ParentSibling />
      </div>
    </div>
  );
  
}

export default OverParent;