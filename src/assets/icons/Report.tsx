import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const ReportIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '20'}
    height={height ? height : '20'}
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      id="Vector"
      d="M17.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5125C0 18.8875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V7.5L17.5 0ZM2.5 17.5125V2.5H16.25V8.75H22.5V17.5125H2.5Z"
      fill={fill}
    />
  </svg>
);

export default ReportIcon;
