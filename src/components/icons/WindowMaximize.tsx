import * as React from 'react';

const WindowMaximize = (
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
    <path fill="currentColor" d="M4 4h16v16H4V4m2 4v10h12V8H6Z" />
  </svg>
);

export default WindowMaximize;
