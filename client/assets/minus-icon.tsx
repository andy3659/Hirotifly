import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const MinusIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="#ffbf00"
      d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-72-280h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
    />
  </Svg>
);

export default MinusIcon;
