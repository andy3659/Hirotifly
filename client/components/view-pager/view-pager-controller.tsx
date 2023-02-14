import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewPagerButton from "./view-pager-button";
import QueueIcon from "../../assets/queue-icon";
import useViewPager from "../../stores/useViewPager";
import PlaylistIcon from "../../assets/playlist-icon";
function ViewPagerController() {
  const switchIndex = useViewPager((state) => state.switchIndex);
  const buttons = [
    {
      text: "Queue",
      icon: <QueueIcon index={0} />,
    },
    {
      text: "Playlist",
      icon: <PlaylistIcon index={1} />,
    },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((button, i) => (
        <ViewPagerButton
          key={i}
          icon={button.icon}
          text={button.text}
          onPress={() => switchIndex(i)}
          index={i}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
});

export default ViewPagerController;
