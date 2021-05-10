import React from "react";

interface Props {
  [key: string]: any;
  data: unknown[];
}

export default function NestedSibling(props: Props): JSX.Element {
   console.log("i'm nested  sibling");
  return <ul>
    <li></li>
  </ul>;
}
