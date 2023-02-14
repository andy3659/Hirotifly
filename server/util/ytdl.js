import ytdl from "ytdl-core";
const BASE_URL = "https://www.youtube.com/watch?v=";
const yt = {
  async getAudioStream(videoId) {
    const { info, contentLength } = await this.getInfo(videoId);
    return { stream: ytdl.downloadFromInfo(info), contentLength };
  },
  async getInfo(videoId) {
    const info = await ytdl.getInfo(videoId);
    const formats = info.formats.filter(
      (info) => info.itag === 139 || info.itag === 140 || info.itag === 141
    );
    info.formats = formats;
    const contentLength = formats[0].contentLength;
    return { info, contentLength };
  },
};
export default yt;
