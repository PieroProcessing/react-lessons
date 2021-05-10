import React from 'react';
import { Parent, ParentSibling } from './componets';

const  App = ():JSX.Element => {
  console.log('i\'m app')

  return (
    <>
    <Parent/>
    {/* <ParentSibling/> */}
    </>
  );
}

export default App;
