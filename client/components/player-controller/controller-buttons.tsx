import React, { useEffect, useCallback } from "react";
import TrackPlayer, {
  State,
  usePlaybackState,
} from "react-native-track-player";
import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import BackwardIcon from "../../assets/backward-icon";
import ForwardIcon from "../../assets/forward-icon";
import PauseIcon from "../../assets/pause-icon";
import PlayIcon from "../../assets/play-icon";
import { useDebouncedValue } from "../../hooks";

function ControllerButtons() {
  const state = usePlaybackState().state;
  const isPLaying = state === State.Playing;
  const isLoading = useDebouncedValue(
    state === State.Loading || state === State.Buffering,
    250
  );

  const PausePlayButton = () => {
    if (isLoading) {
      return <ActivityIndicator size={"small"} color={"#ffbf00"} />;
    }
    if (isPLaying) {
      return (
        <Pressable
          style={styles.controllerButton}
          disabled={isLoading}
          onPress={TrackPlayer.pause}
        >
          <PauseIcon />
        </Pressable>
      );
    } else {
      return (
        <Pressable
          style={styles.controllerButton}
          disabled={isLoading}
          onPress={TrackPlayer.play}
        >
          <PlayIcon />
        </Pressable>
      );
    }
  };

  const PreviousButton = () => {
    return (
      <Pressable
        style={styles.controllerButton}
        onPress={() => TrackPlayer.skipToPrevious()}
      >
        <BackwardIcon />
      </Pressable>
    );
  };

  const NextButton = () => {
    return (
      <Pressable
        style={styles.controllerButton}
        onPress={() => TrackPlayer.skipToNext()}
      >
        <ForwardIcon />
      </Pressable>
    );
  };

  return (
    <View style={styles.playerControllerContainer}>
      <PreviousButton />
      <PausePlayButton />
      <NextButton />
    </View>
  );
}

const styles = StyleSheet.create({
  playerControllerContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  controllerButton: {
    flex: 1,
    aspectRatio: 1 / 1,
    padding: 10,
    borderRadius: 50,
  },
  activeControllerButton: {
    flex: 1,
    aspectRatio: 1 / 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#1e2124",
  },
});

export default ControllerButtons;
