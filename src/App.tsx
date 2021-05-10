import React from 'react';
import { OverParent } from './componets';

const  App = ():JSX.Element => {
  console.log('I\'m app')

  return (
    <div className='container border'>
    <OverParent/>
    </div>
  );
}

export default App;
