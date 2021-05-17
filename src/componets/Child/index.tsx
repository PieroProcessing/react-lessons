import { useState, MouseEvent, useEffect } from "react";
import { ConvetionalProps } from "../../models";

interface Props extends ConvetionalProps {
  isActive: boolean;
  element: { id: string | undefined; age: number };
}

const Child = (props: Props): JSX.Element => {

    const [click, setClick] = useState<HTMLDivElement>()

    // useEffect(() => {
    //   console.log(`i'm child in useEffect without dependency`)
    // }, []);
    // useEffect(() => {
    //   console.log(`i'm child ${props.element.id} in useEffect with props dependency`)
    // }, [props]);
    // useEffect(() => {
    //   console.log(`i'm child  in useEffect with click value :${click} dependency`)
    //   if(!click) return;
    //   click.classList.add("newclass");
    // }, [click]);
    
    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
      setClick(event.currentTarget);
    };
    return (
      <div id={props.element.id} className='col py-5 border' onClick={handleClick} style={{ backgroundColor: props.backgroundColor}}>
        i'm child. My name is {props.element.id}.
        {props?.variableInParent || null}
      </div>
    );
}

export default Child 