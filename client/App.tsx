import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import SearchBar from "./components/search-bar/search-bar-button";
import Screen from "./components/screen-container/screen-container";
import MyViewPager from "./components/view-pager/view-pager";
import { SetupService } from "./track_player/setupService";
import usePlayer from "./stores/usePlayer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home-screen";
import SearchScreen from "./screens/search-screen";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

export default function App() {
  const setIsPlayerReady = usePlayer((state) => state.setIsPlayerReady);
  useEffect(() => {
    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);
    }
    run();
  }, []);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
