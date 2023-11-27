import React, { HTMLAttributes } from 'react';

interface IIcon extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
}

const ChatIcon: React.FC<IIcon> = ({ width, height, fill, ...rest }) => (
  <svg
    width={width ? width : '47'}
    height={height ? height : '47'}
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="Group 25" opacity="0.6">
      <g id="Group 26">
        <g id="Ellipse 15" filter="url(#filter0_d_287_11)">
          <path
            d="M35 19.5C35 13.1487 29.8513 8 23.5 8C17.1487 8 12 13.1487 12 19.5C12 25.8513 17.1487 31 23.5 31C29.8513 31 35 25.8513 35 19.5Z"
            stroke="#797B8B"
            strokeWidth="3"
          />
        </g>
        <path
          id="T"
          d="M26.8983 17.6353H24.5266V23.6783H22.8155V17.6353H20.4547V16H26.8983V17.6353Z"
          stroke="#797B8B"
          strokeWidth="0.803901"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_287_11"
        x="0.807143"
        y="0.684286"
        width="45.3857"
        height="45.3857"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3.87714" />
        <feGaussianBlur stdDeviation="4.84643" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.0705882 0 0 0 0 0.2 0 0 0 0.13 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_287_11" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_287_11" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default ChatIcon;
