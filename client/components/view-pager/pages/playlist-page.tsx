import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PlaylistPage() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.sleep}>{`_(:3」∠)_`}</Text>
        <Text style={styles.soon}>Coming Soon...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  sleep: {
    fontSize: 50,
    color: "#ffbf00",
  },
  soon: {
    fontSize: 30,
    color: "#ffbf00",
  },
});

export default PlaylistPage;
