import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const BarIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '20'}
    height={height ? height : '20'}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      id="Vector"
      d="M0 6H4.28571V20H0V6ZM8 0H12V20H8V0ZM16 11.4286H20V20H16V11.4286Z"
      //   fill="#0466C8"
      fill={fill}
    />
  </svg>
);

export default BarIcon;
