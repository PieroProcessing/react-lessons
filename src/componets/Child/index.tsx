import React, { MouseEvent, useEffect, useState } from 'react';

interface Props {
  [key: string]: unknown;
  element: { id: string; age: number };
  // Action: (event: MouseEvent<HTMLDivElement>) => void;
  action: (n: number) => void;
  // Callback: <T>(args:any)=> T,
}
// allback<string>({id: 0});

const Child = ({ element, action }: Props): JSX.Element => {
  // const [childClick, setChildClick]= useState<{test: number}>({test: 0});
  const [numberClick, setNumberClick] = useState<number>(0);
  // eslint-disable-next-line no-console
  console.log("i'm child", numberClick);
  const fn = (event: MouseEvent<HTMLDivElement>): void => {
    //   setChildClick();
    setNumberClick(numberClick + 1);
  };
  /*
   * / useEffect(callback, []);
   * // useLayoutEffect(() => {
   * //     console.log('sono layout effect')
   *
   * // }, [])
   * // useEffect(()=>{
   * //     console.log('effect without dep', numberClick)
   * //     return ()=> console.log('exit')
   * // },[]);
   */
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('effect with dep', numberClick);
    action(numberClick);
  }, [numberClick, action]);
  return (
    <div id={element.id} onClick={fn}>
      i'm child. My name is {element.id}. Click me! n:{numberClick}
    </div>
  );
};
export default Child;
