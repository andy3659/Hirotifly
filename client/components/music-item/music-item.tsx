import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StyleProp,
} from "react-native";
import { musicObject } from "../../types";
import { Track } from "react-native-track-player";
import VerticalDotsIcon from "../../assets/vertical-dots-icon";
import usePlayer from "../../stores/usePlayer";
import MinusIcon from "../../assets/minus-icon";

type musicItemType = {
  item: musicObject | Track;
  onPress: () => void;
  onOption: () => void;
  style?: StyleProp<any>;
  index: number;
  activeable?: boolean;
  option?: string;
};

function MusicItem({
  item,
  onPress,
  onOption,
  style,
  index,
  activeable = false,
  option = "none",
}: musicItemType) {
  const [imageUrl, setImageUrl] = useState<string>(item.image);
  const playingIndex = usePlayer((state) => state.playingIndex);
  const isActive = index == playingIndex && activeable == true;
  const activeStyle = isActive
    ? { backgroundColor: "#ffbf00", color: "#36393e", display: "none" }
    : { backgroundColor: "#36393e", color: "#ffbf00", display: "flex" };
  const OptionButton = () => {
    if (isActive) return <></>;
    else {
      if (option == "remove")
        return (
          <View style={styles.optionContainer}>
            <Pressable style={[styles.optionPressable]} onPress={onOption}>
              <MinusIcon />
            </Pressable>
          </View>
        );
      else if (option == "save")
        return (
          <View style={styles.optionContainer}>
            <Pressable style={[styles.optionPressable]} onPress={onOption}>
              <VerticalDotsIcon iconColor={activeStyle.color} />
            </Pressable>
          </View>
        );
      else return <></>;
    }
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: activeStyle.backgroundColor },
      ]}
    >
      <View style={styles.imageAndTitleContainer}>
        <Pressable style={styles.imageAndTitlePressable} onPress={onPress}>
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
            onError={() => setImageUrl(item.alternativeImage)}
          />
          <View style={styles.titleAuthorAndDurationContainer}>
            {/* TITLE */}
            <Text
              style={[styles.title, { color: activeStyle.color }]}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style={styles.authorAndDurationContainer}>
              {/* AUTHOR */}
              <Text
                numberOfLines={1}
                style={[styles.author, { color: activeStyle.color }]}
              >
                {item.author}
              </Text>
              {/* DuRATION */}
              <Text style={[styles.duration, { color: activeStyle.color }]}>
                {item.timestamp}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <OptionButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 4,
    borderColor: "#ffbf00",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#36393e",
  },
  imageAndTitleContainer: {
    flex: 10,
    flexDirection: "row",
  },
  imageAndTitlePressable: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    flex: 2,
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 3,
  },
  titleAuthorAndDurationContainer: {
    flex: 3,
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  title: {
    fontSize: 14,
    color: "#ffbf00",
    fontWeight: "500",
    lineHeight: 16,
  },
  authorAndDurationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    fontSize: 14,
    color: "#ffbf00",
    width: "70%",
  },
  duration: {
    fontSize: 14,
    color: "#ffbf00",
  },
  optionContainer: {
    flex: 1,
  },
  optionPressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default MusicItem;
