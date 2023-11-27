import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const NoteIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '18'}
    height={height ? height : '18'}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="Group 45">
      <circle id="Ellipse 3" cx="8.86667" cy="9.26668" r="8.4" fill="#5A04C8" fillOpacity="0.2" />
      <path
        id="Vector"
        d="M11.0581 7.07537H10.3277C10.3277 6.26824 9.67394 5.6145 8.86681 5.6145C8.05968 5.6145 7.40594 6.26824 7.40594 7.07537H6.6755C6.27376 7.07537 5.94507 7.40407 5.94507 7.8058V12.1884C5.94507 12.5902 6.27376 12.9188 6.6755 12.9188H11.0581C11.4599 12.9188 11.7885 12.5902 11.7885 12.1884V7.8058C11.7885 7.40407 11.4599 7.07537 11.0581 7.07537ZM8.86681 6.34493C9.26855 6.34493 9.59724 6.67363 9.59724 7.07537H8.13637C8.13637 6.67363 8.46507 6.34493 8.86681 6.34493ZM11.0581 12.1884H6.6755V7.8058H7.40594V8.53624C7.40594 8.73711 7.57029 8.90146 7.77116 8.90146C7.97202 8.90146 8.13637 8.73711 8.13637 8.53624V7.8058H9.59724V8.53624C9.59724 8.73711 9.76159 8.90146 9.96246 8.90146C10.1633 8.90146 10.3277 8.73711 10.3277 8.53624V7.8058H11.0581V12.1884Z"
        fill="#5A04C8"
      />
    </g>
  </svg>
);

export default NoteIcon;
