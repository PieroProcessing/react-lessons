import React, { ChangeEvent } from 'react';

interface Props {
  [key: string]: unknown;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NestedChild = ({ onChange }: Props): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log("i'm nested  child");
  return (
    <div>
      <label htmlFor="questoInput">
        i'm input label in nested child
        <input type="text" id="questoInput" name="questoInput" onChange={onChange} />
      </label>
    </div>
  );
};
export default NestedChild;
