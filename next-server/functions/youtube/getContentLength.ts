import { videoInfo } from "ytdl-core";

const getContentLength = (videoInfo: videoInfo): string => {
  const contentLength = videoInfo.formats[0].contentLength;
  return contentLength;
};
export { getContentLength };
