import * as React from 'react';

const Add = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
  </svg>
);

export default Add;
