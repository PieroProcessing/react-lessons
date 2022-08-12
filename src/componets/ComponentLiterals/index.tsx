/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable multiline-comment-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';


export const TypeA = ({ propA }: { propA: any }) => {
console.log("🚀 ~ file: index.tsx ~ line 20 ~ TypeA ~ propA", propA);

  useEffect(() => {
    return () => {
      console.log('TypeA destroyed');
    };
  }, []);
  return <div>TypeA {propA}</div>;
};
export const TypeB = ({ propB }: { propB: any }) => {
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ TypeC ~ propB', propB);
  useEffect(() => {
    return () => {
      console.log('TypeB destroyed');
    };
  }, []);
  return <div>TypeB {propB}</div>;
};
export const TypeC = ({ propC }: { propC: any }) => {
  console.log('🚀 ~ file: index.tsx ~ line 11 ~ TypeC ~ propC', propC);
  useEffect(() => {
    return () => {
      console.log('typeC destroyed');
    };
  }, []);
  return <div>TypeC {propC}</div>;
};


export const ComponentLiteral = () => {

  const [type, setType] = useState('');
  console.log("🚀 ~ file: index.tsx ~ line 50 ~ ComponentLiteral ~ type", type);
  const [props, setProps] = useState('what');
  console.log("🚀 ~ file: index.tsx ~ line 51 ~ ComponentLiteral ~ props", props);
  const propRef = useRef<string>('');
  console.log("🚀 ~ file: index.tsx ~ line 52 ~ ComponentLiteral ~ propRef", propRef?.current);
  const ReferencedComponent = useMemo(() => (
    {
      a: TypeA,
      b: TypeB,
      c: TypeC,
    }[type] || TypeA
  ), [type]);

  return (
    <>
      {ReferencedComponent && <ReferencedComponent propB={props} propC={props} propA={props} />}
      <button
        type='button' onClick={() => {
          propRef.current = 'propRef';
          console.log("🚀 ~ file: index.tsx ~ line 70 ~ ComponentLiteral ~ propRef?.current", propRef?.current);
          setType('b');
        }}
      > change type
      </button>
      <button type='button' onClick={() => setProps('where')}> change props</button>
    </>
  );
};
