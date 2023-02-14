import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import TrackPlayer, {
  useProgress,
  State,
  usePlaybackState,
} from "react-native-track-player";
import Slider from "@react-native-community/slider";
import usePlayer from "../../stores/usePlayer";
import PlayIcon from "../../assets/play-icon";
import BackwardIcon from "../../assets/backward-icon";
import ForwardIcon from "../../assets/forward-icon";
import PauseIcon from "../../assets/pause-icon";
import ControllerButtons from "./controller-buttons";
const screenWidth = Dimensions.get("window").width;

function PlayerController() {
  const playingIndex = usePlayer((state) => state.playingIndex);
  const queue = usePlayer((state) => state.queue);
  const progress = useProgress();
  const state = usePlaybackState();
  if (!Array.isArray(queue) || !queue.length) {
    return <View style={styles.container}></View>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.transparent} />
        <View style={styles.subContainer}>
          <View style={styles.trackDetailContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {/* TITLE */}
              {queue[playingIndex!].title}
            </Text>
            <View style={styles.authorAndDurationContainer}>
              {/* AUTHOR */}
              <Text numberOfLines={1} style={styles.author}>
                {queue[playingIndex!].author}
              </Text>
              {/* DURATION */}
              <Text style={styles.duration}>
                {`${new Date(progress.position * 1000)
                  .toISOString()
                  .slice(14, 19)} / ${new Date(progress.duration * 1000)
                  .toISOString()
                  .slice(14, 19)}`}
              </Text>
            </View>
          </View>
          <ControllerButtons />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={progress.duration}
          value={progress.position}
          onSlidingComplete={TrackPlayer.seekTo}
          thumbTintColor={"#ffbf00"}
          maximumTrackTintColor={"rgba(255, 191, 0, 0.8)"}
          minimumTrackTintColor={"rgba(255, 191, 0, 1)"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    backgroundColor: "#36393e",
  },
  transparent: {
    height: 16,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
  trackDetailContainer: {
    justifyContent: "space-between",
    flex: 3,
  },
  title: {
    color: "#ffbf00",
    fontWeight: "500",
    fontSize: 16,
  },
  authorAndDurationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    flex: 1,
    fontSize: 14,
    textAlign: "left",
    fontWeight: "300",
    color: "#ffbf00",
  },
  duration: {
    flex: 1,
    fontSize: 14,
    textAlign: "right",
    fontWeight: "300",
    color: "#ffbf00",
  },
  slider: {
    position: "absolute",
    height: 32,
    width: screenWidth + 32,
    margin: 0,
    padding: 0,
  },
});

export default PlayerController;
