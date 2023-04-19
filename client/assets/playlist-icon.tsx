import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import useViewPager from "../stores/useViewPager";
interface index {
  index: number;
}

const PlaylistIcon = ({ index, ...props }: SvgProps & index) => {
  const activeIndex = useViewPager((state) => state.index);
  const color = index == activeIndex ? "#1C1E21" : "#ffbf00";
  return (
    <Svg width={28} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.538 7c0-1.105-1.033-2-2.307-2H13.848c.046 0 .032-.016-.07-.123a14.967 14.967 0 0 1-.312-.342l-.14-.156C12.499 3.475 11.676 3 10.385 3H3.462c-1.275 0-2.308.895-2.308 2v14c0 1.105 1.033 2 2.308 2H24.23c1.274 0 2.307-.895 2.307-2V7Zm-2.307 0v12H3.46V5h6.924c.443 0 .7.149 1.132.621l.101.113c.093.103.22.246.273.303.58.623 1.12.96 1.949.963h10.39Zm-10.385 6.14V8.131l5.256 3.037-1.28 1.664-1.668-.964V15.5c0 1.453-1.61 2.5-3.462 2.5-1.851 0-3.461-1.047-3.461-2.5s1.61-2.5 3.461-2.5c.4 0 .79.049 1.154.14ZM12.692 16c.698 0 1.154-.297 1.154-.5s-.456-.5-1.154-.5c-.697 0-1.153.297-1.153.5s.456.5 1.153.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default PlaylistIcon;
