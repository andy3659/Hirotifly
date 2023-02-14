import TrackPlayer, { Track } from "react-native-track-player";
import create from "zustand";
import { musicObject } from "../types";
import util from "../util/util";
type playerType = {
  isPlayerReady: boolean;
  setIsPlayerReady: (ready: boolean) => void;
  queue: musicObject[];
  refreshQueue: () => void;
  playingIndex: number | null;
  setPlayingIndex: (index: number | null) => void;
  isPaused: boolean;
  setIsPaused: (pauseState: boolean) => void;
};

const usePlayer = create<playerType>()((set) => ({
  isPlayerReady: false,
  setIsPlayerReady: (ready: boolean) => set({ isPlayerReady: ready }),
  queue: [],
  refreshQueue: async () =>
    set({ queue: util.tracksToMusics(await TrackPlayer.getQueue()) }),
  playingIndex: 0,
  setPlayingIndex: (index) => set({ playingIndex: index }),
  isPaused: false,
  setIsPaused: (pauseState: boolean) => set({ isPaused: pauseState }),
}));

export default usePlayer;
