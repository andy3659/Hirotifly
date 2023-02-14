import { registerRootComponent } from "expo";
import App from "./App";
import TrackPlayer from "react-native-track-player";
import { PlaybackService } from "./track_player/playbackService";

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
