import React from 'react';

interface Props {
  [key: string]: unknown;
  data: unknown[];
}

const NestedSibling = ({ data, key }: Props): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log("i'm nested  sibling", data);
  return (
    <ul>
      <li />
    </ul>
  );
};

export default NestedSibling;
