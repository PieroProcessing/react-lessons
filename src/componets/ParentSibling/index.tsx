import React, { ChangeEvent,   useState } from "react";
import Child from "../Child";

interface Props {
  [key: string]: any;
  callback: (attr: any) => void;
  children: ((attr: any) => JSX.Element);
}

const ParentSibling: React.FC<Props> = (
  props
): JSX.Element => {
  console.log("i'm parent  sibling", props);
  const [input, setInput] = useState<{ name: string; value: string }>();
  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    console.log("input usefull value", name, value);
    setInput({ name, value });
  };
  return (
    <div className="border">
      <div className="p-y5 ">
        <span onClick={() => props.callback("I'm parent sibling")}>
          I'm parent sibling
        </span>
        <div>
          <label>I'm an usefull input </label>
          <input
            onChange={handleChange}
            name="usefullinput"
            value={input?.value || ""}
            // value={input?.value}
          />
        </div>
        <div className="d-flex flex-row">
          <Child
            isActive={true}
            element={{ id: "This is Child inside", age: 46 }}
          />
          {props?.children({
            isActive: true,
            element: { id: `${input?.value} this is Child with clone`, age: 46 },
            backgroundColor: "red",
          })}
        </div>
      </div>
    </div>
  );
};

export default ParentSibling;