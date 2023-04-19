import { createWriteStream } from "fs";
import internal, { PassThrough } from "stream";
import { pipeline } from "stream/promises";
// import path from "path";

const saveAudioFile = ({
  stream,
  videoId,
}: {
  stream: internal.Readable;
  videoId: string;
}) => {
  // const audioPath = path.join(process.cwd(), process.env.AUDIO_BASE_PATH!);
  const filePath = `${process.env.AUDIO_BASE_PATH}${videoId}.m4a`;
  const file = createWriteStream(filePath);
  return pipeline(stream, file);
};
export { saveAudioFile };
