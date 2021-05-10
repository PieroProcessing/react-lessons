import React, { MouseEvent, MouseEventHandler, useEffect, useLayoutEffect, useState } from 'react'

interface Props {
  [key: string]: any;
  data: string[];
  isActive: boolean;
  element: { id: string; age: number };
//   action: (event: MouseEvent<HTMLDivElement>) => void;
  action: (n: number) => void;
  //  callback: <T>(args:any)=> T,
}
//  callback<string>({id: 0});

const Child = (props: Props): JSX.Element => {
    // const [childClick, setChildClick]= useState<{test: number}>({test: 0});
    const [numberClick, setNumberClick]= useState<number>(0);
    console.log("i'm child", numberClick);
    const fn = (event: MouseEvent<HTMLDivElement>): void => {
    //   setChildClick();
      setNumberClick(numberClick + 1);
     
    };
    // useEffect(callback, []);
    // useLayoutEffect(() => {
    //     console.log('sono layout effect')
     
    // }, [])
    // useEffect(()=>{
    //     console.log('effect without dep', numberClick)
    //     return ()=> console.log('exit')
    // },[]);
    useEffect(()=>{
         console.log("effect with dep", numberClick);
          props.action(numberClick);
    },[numberClick, props])
    return (
      <div id={props.element.id} onClick={fn}>
        i'm child. My name is {props.element.id}. Click me! n:{numberClick}
      </div>
    );
}
export default Child 