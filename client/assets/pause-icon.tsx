import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const PauseIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 320 512" {...props}>
    <Path
      fill="#ffbf00"
      d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32z"
    />
  </Svg>
);

export default PauseIcon;
