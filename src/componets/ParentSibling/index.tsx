import React, { ChangeEvent } from 'react';
import NestedChild from '../NestedChild';
import NestedSibling from '../NestedSibling';

// interface Props {
//   [key: string]: any;
// }

const ParentSibling = (): JSX.Element => {
  console.log("i'm parent  sibling");
  const handleChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>): void => console.log('change event', value, name);
  const handleSubmit = (): void => {};

  return (
    <form onSubmit={handleSubmit}>
      i'm parent sibling
      <NestedChild onChange={handleChange} />
      {/* <NestedSibling/> */}
    </form>
  );
};
export default ParentSibling;
