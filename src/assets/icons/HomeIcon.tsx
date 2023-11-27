import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const HomeIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '20'}
    height={height ? height : '20'}
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      id="Vector"
      d="M11.7647 3.16471L17.6471 8.45882V17.6471H15.2941V10.5882H8.23529V17.6471H5.88235V8.45882L11.7647 3.16471ZM11.7647 0L0 10.5882H3.52941V20H10.5882V12.9412H12.9412V20H20V10.5882H23.5294L11.7647 0Z"
      fill={fill}
    />
  </svg>
);

export default HomeIcon;
