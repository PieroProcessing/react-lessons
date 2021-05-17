import React, { useRef } from 'react' ;
import { useEffect } from 'react';
import { Form } from '../Form';
import { Parent, ParentSibling, Child } from '../index'

const OverParent = ():JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    console.log('i am not rendered');
    // const handleCallback = (txt: string)=> console.log('this is callback message: ', txt)
    useEffect(
      ()=>{
        if(!ref || !ref.current)return;
        ref.current.onmousedown = nostraCallback
      }, [ref]
    );
    const nostraCallback = (event: MouseEvent)=>{
        if (!ref || !ref.current) return;
        console.log('position', 
          ref.current.getBoundingClientRect().top, 
          event.clientY
        );
        ref.current.style.top = event.clientY + 'px';
        ref.current.style.left = event.clientX + 'px';
    }
    return (
      <div className="row text-center" style={{width: 400, height: 400}}>
        <div 
          ref={ref} 
          style={{width:80, height:80, background: 'red', position: 'absolute'}}
        > 

        </div>
        {/* <div className="col-12 py-5">I'm overparent</div>
        <div className="col py-5 border">
          <Parent > 
              <div> this is children array 1</div>
              <div> this is children array 2</div>
          </Parent>
        </div>
        <div className="col py-5 border">
          <ParentSibling  callback={handleCallback} >
            {(attr: any)=> <Child {...attr} />}
          </ParentSibling>
        </div>
          <div className="col py-5 border">
            <Form/>
          </div> */}
      </div>
    );
}
export default OverParent;