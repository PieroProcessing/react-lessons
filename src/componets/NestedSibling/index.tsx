import React from 'react';

interface Props {
  [key: string]: unknown;
  data: unknown[];
}

const NestedSibling = ({ data }: Props): JSX.Element => {
  console.log("i'm nested  sibling", data);
  return (
    <ul>
      <li />
    </ul>
  );
};

export default NestedSibling;
