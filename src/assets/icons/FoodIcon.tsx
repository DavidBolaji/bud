import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const FoodIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '17'}
    height={height ? height : '17'}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="Group 44">
      <circle id="Ellipse 3" cx="8.4" cy="8.40001" r="8.4" fill="#F4E9CD" />
      <path
        id="Vector"
        d="M11.8026 10.8731H3.65222V11.8331H13.2522V10.8731H11.8026ZM12.7722 10.3931C12.6426 8.43945 11.2122 6.84105 9.33542 6.45225C9.38342 6.33705 9.41222 6.20745 9.41222 6.07305C9.41222 5.54505 8.98022 5.11305 8.45222 5.11305C7.92422 5.11305 7.49222 5.54505 7.49222 6.07305C7.49222 6.20745 7.52102 6.33705 7.56902 6.45225C5.69222 6.84105 4.26182 8.43945 4.13222 10.3931H12.7722ZM8.45222 7.31145C9.86822 7.31145 11.0778 8.18985 11.5722 9.42825H5.33222C5.82662 8.18985 7.03622 7.31145 8.45222 7.31145Z"
        fill="#C89104"
      />
    </g>
  </svg>
);

export default FoodIcon;
