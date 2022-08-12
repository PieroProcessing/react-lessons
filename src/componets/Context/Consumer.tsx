import React from 'react';
import { ThemeContext } from './context';



export const Consumer = ():JSX.Element => {
  const context = React.useContext(ThemeContext); 
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: Consumer.tsx ~ line 6 ~ darkTheme', context?.value);
  return (
    <>
      <div style={{ display: context?.value ? 'none' : 'block', width: 200, height: 200, backgroundColor: 'red' }}>
        <div style={{ display: context?.value ? 'none' : 'block', width: 100, height: 100, backgroundColor: 'red' }}>Context Example</div>
      </div>
      <button onClick={():void => void context?.setter()} type='button'> click me!</button>
    </>
  );
};

