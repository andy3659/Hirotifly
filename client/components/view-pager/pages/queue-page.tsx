import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from "react-native-track-player";
import usePlayer from "../../../stores/usePlayer";
import MusicItem from "../../music-item/music-item";

function QueuePage() {
  const queue = usePlayer((state) => state.queue);
  const refreshQueue = usePlayer((state) => state.refreshQueue);
  const isPlayerReady = usePlayer((state) => state.isPlayerReady);
  const setPlayingIndex = usePlayer((state) => state.setPlayingIndex);
  const playingIndex = usePlayer((state) => state.playingIndex);
  const backgroundColor = (index: number) => {
    if (playingIndex == index) {
      return { backgroundColor: "#ffbf00", color: "#1C1E21" };
    } else {
      return { backgroundColor: "#1C1E21", color: "#ffbf00" };
    }
  };

  const removeItemHandler = async (index: number) => {
    TrackPlayer.remove(index);
    setPlayingIndex(await TrackPlayer.getCurrentTrack());
    refreshQueue();
  };

  useEffect(() => {
    if (isPlayerReady) {
      refreshQueue();
    }
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async () => {
    setPlayingIndex(await TrackPlayer.getCurrentTrack());
  });
  if (queue.length < 1) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptySubContainer}>
          <Text style={styles.cry}>{`(ಥ﹏ಥ)`}</Text>
          <Text style={styles.cryText}>Nothing Queued...</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={queue}
        renderItem={(props) => (
          <MusicItem
            {...props}
            onPress={() => TrackPlayer.skip(props.index)}
            onOption={() => removeItemHandler(props.index)}
            style={backgroundColor(props.index)}
            activeable={true}
            index={props.index}
            option={"remove"}
          />
        )}
        keyExtractor={(item, index) => `${index}${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  emptyContainer: { flex: 1 },
  emptySubContainer: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  cry: {
    fontSize: 50,
    color: "#ffbf00",
  },
  cryText: {
    fontSize: 25,
    color: "#ffbf00",
  },
});

export default QueuePage;
