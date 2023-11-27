import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const CarIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '10'}
    height={height ? height : '8'}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="Group 1">
      <path
        id="Vector"
        d="M8.71046 1.00892C8.60588 0.739572 8.31304 0.547832 7.96791 0.547832H2.21573C1.8706 0.547832 1.583 0.739572 1.47318 1.00892L0.385498 3.74348V7.39566C0.385498 7.64675 0.620814 7.85218 0.908423 7.85218H1.43135C1.71896 7.85218 1.95427 7.64675 1.95427 7.39566V6.93914H8.22937V7.39566C8.22937 7.64675 8.46469 7.85218 8.7523 7.85218H9.27522C9.56283 7.85218 9.79815 7.64675 9.79815 7.39566V3.74348L8.71046 1.00892ZM2.39876 1.46088H7.77965L8.34441 2.88066H1.834L2.39876 1.46088ZM8.7523 6.02609H1.43135V3.74348H8.7523V6.02609Z"
        fill="#04A5C8"
      />
      <path
        id="Vector_2"
        d="M2.73861 5.56957C3.17182 5.56957 3.523 5.26299 3.523 4.88479C3.523 4.5066 3.17182 4.20001 2.73861 4.20001C2.30541 4.20001 1.95422 4.5066 1.95422 4.88479C1.95422 5.26299 2.30541 5.56957 2.73861 5.56957Z"
        fill="#04A5C8"
      />
      <path
        id="Vector_3"
        d="M7.44515 5.56957C7.87836 5.56957 8.22954 5.26299 8.22954 4.88479C8.22954 4.5066 7.87836 4.20001 7.44515 4.20001C7.01195 4.20001 6.66077 4.5066 6.66077 4.88479C6.66077 5.26299 7.01195 5.56957 7.44515 5.56957Z"
        fill="#04A5C8"
      />
    </g>
  </svg>
);

export default CarIcon;
