// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import internal from "stream";
import { audioExist, getAudioDirectUrl } from "../../../functions/firebase";
import {
  getVideoInfo,
  getAudioStream,
  getContentLength,
} from "../../../functions/youtube";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<internal.Readable>
) {
  const { videoId } = req.query as { videoId: string };

  if (await audioExist(videoId)) {
    res.redirect(await getAudioDirectUrl(videoId));
    return;
  }

  const info = await getVideoInfo(videoId);
  const stream = getAudioStream(info);
  const contentLength = getContentLength(info);
  res.setHeader("Content-Type", "audio/mp4");
  res.setHeader("Content-Length", contentLength);
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Connection", "keep-alive");
  res.status(200).json(stream);
}
