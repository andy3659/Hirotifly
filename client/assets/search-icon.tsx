import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 1 6.32-3.094l5.387 5.387-1.414 1.414-5.387-5.387A7.965 7.965 0 0 1 10 18Zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      fill="#36393e"
    />
  </Svg>
);

export default SvgComponent;
