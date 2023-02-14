import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const PlayIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 384 512" {...props}>
    <Path
      fill="#ffbf00"
      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    />
  </Svg>
);

export default PlayIcon;
