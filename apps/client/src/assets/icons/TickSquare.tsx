import React from "react";

export const TickSquare = ({
  width = 24,
  height = 25,
  ...restProps
}: React.SVGProps<SVGSVGElement> & { height?: number; width?: number }) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z"
    />
  </svg>
);
