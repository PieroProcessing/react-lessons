import React, { useEffect, useState } from 'react';
import _get from '../../service';
import { SwapiGetResponse } from '../../service/_get';
import Child from '../Child';
// interface Props {
//   [key: string]: any;
//   data: string[];
//   isActive: boolean;
//   element: { id: string; age: number };
//   action: () => void;
// //   callback: <T>(args:any) => T;
// }
const c = 0;
const Parent = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  const [destroyChild, setDestroyChild] = useState<boolean>(false);
  const handleNumber = (e: React.MouseEvent): void => {
    console.log('🚀 ~ file: index.tsx ~ line 23 ~ handleNumber ~ e', e);
    setCounter(counter + 1);
    console.log("i'm parent  Counter ", counter);
  };
  // const handleC = ():void =>{
  //         c = c+1;
  //         console.log("i'm parent  c  ", c );
  // }
  useEffect(() => {
    const apiCall = async (): Promise<void> => {
      const response = await _get<SwapiGetResponse>(null);
      console.log('response api', response);
      const film = await _get(response.films);
      console.log(' response film', film);
    };
    void apiCall();
  }, []);

  const fn = (n: number): void => {
    console.log(`from child i've a number value: ${n}`);
  };
  return (
    <>
      <div>
        i'm parent and counter is C:{c}
        {['test1', 'test2', 'test3'].map(
          (el, index) => !destroyChild && <Child key={el} data={['']} isActive={true} element={{ id: el, age: 46 }} action={fn} />,
        )}
      </div>
      <div>
        <label htmlFor="view"> are you sure you want to destroy child?
          <input type="checkbox" id='view' name='view' onClick={(): void => setDestroyChild(!destroyChild)} />
        </label>
      </div>
      <div onClick={handleNumber}>
        i'm parent and Counter: {counter}
        {/* <Child
             data={['']} 
             isActive={true}
              element={{id: '0', age: 46}}
              action={fn}
            //   callback={fn}
               /> */}
      </div>
    </>
  );
};
export default Parent;
