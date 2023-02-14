import React from "react";
import Screen from "../components/screen-container/screen-container";
import SearchBarButton from "../components/search-bar/search-bar-button";
import MyViewPager from "../components/view-pager/view-pager";
import ViewPagerController from "../components/view-pager/view-pager-controller";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import PlayerController from "../components/player-controller/player-controller";
function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <StatusBar style="inverted" />
      <SearchBarButton />
      <MyViewPager />
      <PlayerController />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36393e",
  },
});

export default HomeScreen;
