import React, { useCallback, useMemo, useState } from 'react' ;
import { useEffect } from 'react';
import { Child } from '..';
import { ConvetionalProps } from '../../models';
import _get from '../../service';
import { List } from '../List';

const Parent = (props: ConvetionalProps):JSX.Element => {
  const [element, setElement] = useState<string>();
  const [ list, setList ] = useState<ConvetionalProps>();

   const apiCall = useCallback(
     async ( setter, url = undefined) =>{
        // console.log("🚀 ~ file: index.tsx ~ line 14 ~ url", url)
        const promise =await _get< ConvetionalProps >(url);
        setter(promise)
      },
     []);
  const doSomething = ()=> console.log('i\'m doing something', element);
  const fn = useCallback(doSomething, [element]);
  let abort = true;
  // useEffect(
  //   ()=>{
  //     doSomething()
  //     return ()=>{ abort = false }
  //   },[element]
  // )

  useEffect(
    ()=>{       
      apiCall((data: ConvetionalProps) => setList(data));
    },[apiCall])
  // useEffect(
  //   ()=>{
  //     const apiCall = async () => await _get(undefined); 
  //     apiCall();
  //   },
  //   [])
     
  const listComponent = useMemo(
    () => {
    const handleNewList = (url: string) => {
      apiCall((data: ConvetionalProps) => {
        setList(data.results);
      }, url);
    };
    return <List data={list} callback={handleNewList} />},
    [list, apiCall]
  );
  const variableInParent = "optional variableInParent";
  return (
    <div className="border">
      <div>I'm parent</div>
      <div>
        <label>input text for state element</label>
        <input
          type="text"
          onChange={({ target: { value } }) => setElement(value)}
        />
      </div>
      {["child1 with map", "child2 with map"].map((el, index) => (
        <Child
          key={index}
          isActive={true}
          element={{ id: element || el, age: 46 }}
        />
      ))}
      {React.Children.map(props.children, (child) => child)}
      {React.cloneElement(
        <Child
          isActive={true}
          element={{ id: "this is child with optional prop", age: 30 }}
        />,
        {
          variableInParent,
        }
      )}
      {/* <List data={list} callback={handleNewList} /> */}
      {listComponent}
    </div>
  );
  
}

export default Parent;