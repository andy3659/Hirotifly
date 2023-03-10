import ytdl, { videoInfo } from "ytdl-core";
const getVideoInfo = async (videoId: string): Promise<videoInfo> => {
  const info = await ytdl.getInfo(videoId);
  const formats = info.formats.filter(
    (info) => info.itag === 139 || info.itag === 140 || info.itag === 141
  );
  info.formats = formats;
  return info;
};

export { getVideoInfo };
