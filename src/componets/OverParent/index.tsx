import React from 'react' ;
import { Parent, ParentSibling } from '..';

const OverParent = ():JSX.Element => {
  console.log(`I'm overparent`);

  return (
    <>
    <div>I'm overparent</div>
    <Parent />
    <ParentSibling />
    </>
  )
  
}

export default OverParent;