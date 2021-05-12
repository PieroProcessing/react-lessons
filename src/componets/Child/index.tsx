import { useState, MouseEvent } from "react";

interface Props {
  [key: string]: any;
  isActive: boolean;
  element: { id: string; age: number };
}

const Child = (props: Props): JSX.Element => {
    console.log("i'm child", props.element.id);
    const [click, setClick] = useState<string>()

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
      console.log("i have clicked", event);
      setClick(event.currentTarget.innerHTML);
      event.currentTarget.classList.add('newclass');
    };
    return (
      <div id={props.element.id} className='col py-5 border' onClick={handleClick} style={{ backgroundColor: props.backgroundColor}}>
        i'm child. My name is {props.element.id}.
        {props?.variableInParent || null}
      </div>
    );
}

export default Child 