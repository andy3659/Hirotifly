import React, { memo } from "react";
import { View, Platform, SafeAreaView, StatusBar } from "react-native";
type ScreenProps = {
  children: React.ReactNode;
  style?: any;
};

const Screen = memo(({ children, style }: ScreenProps) => {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={style}>
        {/* <StatusBar hidden={true} /> */}
        {children}
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={[{ paddingTop: StatusBar.currentHeight }, style]}>
        {/* <StatusBar hidden={true} /> */}
        {children}
      </SafeAreaView>
    );
  }
});
export default Screen;
