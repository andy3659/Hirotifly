import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ForwardIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 320 512" {...props}>
    <Path
      fill="#ffbf00"
      d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
    />
  </Svg>
);

export default ForwardIcon;
