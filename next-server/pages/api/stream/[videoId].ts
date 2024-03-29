// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import internal from "stream";
import { saveAudioFile } from "../../../functions/fileSystem";
import { deleteAudioFile } from "../../../functions/fileSystem/deleteAudioFile";
import {
  audioExist,
  getAudioDirectUrl,
  setAudioToDatabase,
  uploadAudio,
} from "../../../functions/firebase";
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
  const saveStream = getAudioStream(info);
  const responseStream = getAudioStream(info);
  const contentLength = getContentLength(info);
  res.setHeader("Content-Type", "audio/mp4");
  res.setHeader("Content-Length", contentLength);
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Connection", "keep-alive");
  await saveAudioFile({ stream: saveStream, videoId });
  console.log(`${videoId}.m4a saved on local storage.`);

  await uploadAudio(videoId);
  await setAudioToDatabase(videoId);
  deleteAudioFile(videoId);

  responseStream.pipe(res);
}
