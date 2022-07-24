import * as React from 'react';

const WindowMinimize = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    style={{
      msTransform: 'rotate(360deg)',
      WebkitTransform: 'rotate(360deg)',
      transform: 'rotate(360deg)',
    }}
    {...props}
  >
    <path fill="currentColor" d="M20 14H4v-4h16" />
  </svg>
);

export default WindowMinimize;
