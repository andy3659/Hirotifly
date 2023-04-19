import React from "react";
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Pressable,
} from "react-native";
import SearchIcon from "../../assets/search-icon";
import { useNavigation } from "@react-navigation/native";

function SearchBarButton() {
  const navigation = useNavigation<any>();
  const touchHandler = (e: GestureResponderEvent) => {
    navigation.navigate("Search");
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={touchHandler}>
        <Text style={styles.textGray}>Search</Text>
        <SearchIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 5,
    backgroundColor: "#ffbf00",
    borderRadius: 5,
    flexDirection: "row",
  },
  pressable: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textGray: {
    color: "#1C1E21",
    fontSize: 14,
  },
});

export default SearchBarButton;
