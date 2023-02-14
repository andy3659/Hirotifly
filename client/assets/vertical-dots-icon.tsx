import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface iconColor {
  iconColor: string;
}

const VerticalDotsIcon = ({ iconColor, ...props }: iconColor & SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill={iconColor}
    />
  </Svg>
);

export default VerticalDotsIcon;
