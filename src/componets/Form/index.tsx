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
    const mutableVar = useRef<{}>('text');
    useEffect(()=>{
        mutableVar.current = 'new';
    },[])
    const handleSubmit = ()=>{}
    return (
        <form ref={ref} onSubmit={handleSubmit}>
            
        </form >
    )
}
