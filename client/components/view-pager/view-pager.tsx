import React, { useEffect, useRef } from "react";
import QueuePage from "./pages/queue-page";
import PlaylistPage from "./pages/playlist-page";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { StyleSheet } from "react-native";
import useViewPager from "../../stores/useViewPager";
import ViewPagerController from "./view-pager-controller";

function MyViewPager() {
  const activeIndex = useViewPager((state) => state.index);
  const switchIndex = useViewPager((state) => state.switchIndex);
  const ref = useRef<PagerView>(null);
  const pageSelectHandler = (e: PagerViewOnPageSelectedEvent) => {
    switchIndex(e.nativeEvent.position);
  };
  useEffect(() => {
    ref.current?.setPage(activeIndex);
  }, [activeIndex]);

  return (
    <>
      <ViewPagerController />
      <PagerView
        ref={ref}
        style={styles.container}
        onPageSelected={(e) => pageSelectHandler(e)}
      >
        <QueuePage />
        <PlaylistPage />
      </PagerView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MyViewPager;
