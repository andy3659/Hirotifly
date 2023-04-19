import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import useViewPager from "../stores/useViewPager";

interface index {
  index: number;
}

const QueueIcon = ({ index, ...props }: SvgProps & index) => {
  const activeIndex = useViewPager((state) => state.index);
  const color = index == activeIndex ? "#1C1E21" : "#ffbf00";
  return (
    <Svg width={28} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.692 19c0 1.105-1.033 2-2.307 2H10.538c-1.274 0-2.307-.895-2.307-2V5c0-1.105 1.033-2 2.308-2h13.846c1.274 0 2.307.895 2.307 2v14ZM7.077 20c-1.275 0-2.308-.895-2.308-2V6c0-1.105 1.033-2 2.308-2v16Zm-5.77-3c0 1.105 1.034 2 2.308 2V5c-1.274 0-2.307.895-2.307 2v10Zm9.232 2h13.846V5H10.538v14Zm9.23-7-4.615-3v6l4.615-3Z"
        fill={color}
      />
    </Svg>
  );
};

export default QueueIcon;
