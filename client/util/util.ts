import { Track } from "react-native-track-player";
import { musicObject } from "../types";

import config from "../config.json";
const API_BASE_URL = config.apiBaseUrl;

const util = {
  musicsToTracks(musics: musicObject[]) {
    const h: Track[] = [];
    musics.forEach((e) => {
      let temp: Track = { url: "" };
      temp.url = `${API_BASE_URL}${e.id}`;
      temp.title = e.title;
      temp.duration = e.seconds;
      temp.artist = e.author;
      temp.artwork = e.image;
      h.push(temp);
    });
    return h;
  },
  tracksToMusics(tracks: Track[]) {
    const h: musicObject[] = [];
    tracks.forEach((e) => {
      let temp: musicObject = { id: "" };
      temp.id = e.url.toString().slice(-11);
      temp.title = e.title;
      temp.seconds = e.duration;
      temp.timestamp = this.secondToTimestamp(e.duration!);
      temp.author = e.artist;
      temp.image = `https://img.youtube.com/vi/${temp.id}/maxresdefault.jpg`;
      temp.alternativeImage = `https://img.youtube.com/vi/${temp.id}/hqdefault.jpg`;
      h.push(temp);
    });
    return h;
  },
  secondToTimestamp(second: number) {
    return new Date(second * 1000).toISOString().slice(14, 19);
  },
};
export default util;
