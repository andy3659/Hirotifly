import { createWriteStream } from "fs";
import internal from "stream";
import path from "path";

const saveAudioFile = ({
  stream,
  videoId,
}: {
  stream: internal.Readable;
  videoId: string;
}) => {
  const audioPath = path.join(process.cwd(), process.env.AUDIO_BASE_PATH!);
  const filePath = audioPath + videoId + ".m4a";
  const file = createWriteStream(filePath);
  stream.pipe(file);
  return file;
};
export { saveAudioFile };
