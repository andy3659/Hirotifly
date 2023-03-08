import internal from "stream";
import ytdl, { videoInfo } from "ytdl-core";

const getAudioStream = (videoInfo: videoInfo): internal.Readable => {
  const stream = ytdl.downloadFromInfo(videoInfo);
  return stream;
};
export { getAudioStream };
