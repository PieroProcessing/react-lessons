import { ChangeEvent, useState } from "react";
import { useEffect, useRef } from "react";


// // <div> reference type
// const divRef = React.useRef<HTMLDivElement>(null);

// // <button> reference type
// const buttonRef = React.useRef<HTMLButtonElement>(null);

// // <br /> reference type
// const brRef = React.useRef<HTMLBRElement>(null);

// // <a> reference type
// const linkRef = React.useRef<HTMLLinkElement>(null);

export const Form = () => {
    const ref = useRef <HTMLFormElement>(null);
    const [text, setText] = useState<string>();
    const mutableVar = useRef<{}>({current: 300});
    // let x= 
    // const threshold = 300;

    useEffect(()=>{
        mutableVar.current = 'new';
        console.log("🚀 ~ file: index.tsx ~ line 17 ~ Form ~ ref", ref)
    },[ref, text])
    const handleSubmit = ()=>{}
    const handleChange = ({target:{name, value}}:ChangeEvent<HTMLInputElement>)=>{
        setText(value);
    }
    return (
      <form className="row g-3"  ref={ref} onSubmit={handleSubmit}>
        <div>
          <label> write your script</label>
          <input type="text" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
          ></textarea>
        </div>
      </form>
    );
}
