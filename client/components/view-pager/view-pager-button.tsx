import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Text,
} from "react-native";
import useViewPager from "../../stores/useViewPager";

type ViewPagerButtonType = {
  onPress(event: GestureResponderEvent): void;
  icon?: React.ReactNode;
  text: string;
  style?: any;
  index: number;
};

function ViewPagerButton({
  onPress,
  icon,
  text,
  style,
  index,
}: ViewPagerButtonType) {
  const activeIndex = useViewPager((state) => state.index);
  const bgColor = index == activeIndex ? "#ffbf00" : "rgba(255, 191, 0, 0)";
  const textColor = index == activeIndex ? "#1C1E21" : "#ffbf00";

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[{ backgroundColor: bgColor }, styles.container]}>
        {icon}
        <Text style={[{ color: textColor }]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "49%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ffbf00",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginVertical: 10,
  },
});

export default ViewPagerButton;
