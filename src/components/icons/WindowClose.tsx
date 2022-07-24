import * as React from 'react';

const WindowClose = (
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
    <path
      fill="currentColor"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
    />
  </svg>
);

export default WindowClose;
