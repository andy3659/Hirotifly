import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import TrackPlayer, { State } from "react-native-track-player";
import usePlayer from "../../stores/usePlayer";
import useSearch from "../../stores/useSearch";
import { musicObject } from "../../types";
import MusicItem from "../music-item/music-item";

import config from "../../config.json";
const API_BASE_URL = config.apiBaseUrl;

function SearchResult() {
  const isLoading = useSearch((state) => state.isLoading);
  const searchResult = useSearch((state) => state.searchResult);
  const refreshQueue = usePlayer((state) => state.refreshQueue);
  const navigation = useNavigation<any>();

  const musicPressHandler = async (item: musicObject) => {
    console.log(item);
    const queueSize = (await TrackPlayer.getQueue()).length;
    const added = await TrackPlayer.add(
      {
        url: `${API_BASE_URL}/stream/${item.id}`,
        title: item.title,
        artist: item.author,
        artwork: item.image,
        duration: item.seconds,
      },
      queueSize
    );
    console.log(added, queueSize);
    if (added > -1) {
      refreshQueue();
      navigation.navigate("Home");
      const state = await TrackPlayer.getState();
      if (state == State.Playing) return;
      else if (state == State.Stopped) {
        TrackPlayer.skipToNext().then(() => {
          TrackPlayer.play();
        });
      } else {
        TrackPlayer.play();
      }
    }
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator
          size={"large"}
          color={"#ffbf00"}
          style={styles.activityIndicator}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={searchResult}
          renderItem={(props) => (
            <MusicItem
              {...props}
              onPress={() => musicPressHandler(props.item)}
              onOption={() => {}}
              index={props.index}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1E21",
    marginHorizontal: 15,
    marginTop: 10,
    flex: 1,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicator: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
});

export default SearchResult;
