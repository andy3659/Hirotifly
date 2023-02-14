import create from "zustand";
import { debounce } from "lodash-es";
type viewPagerState = {
  index: number;
  switchIndex: (i: number) => void;
};

const useViewPager = create<viewPagerState>()((set) => ({
  index: 0,
  switchIndex: debounce((i: number) => set({ index: i }), 10),
}));

export default useViewPager;
