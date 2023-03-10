import { createWriteStream } from "fs";
import internal from "stream";

const saveAudioFile = ({
  stream,
  videoId,
}: {
  stream: internal.Readable;
  videoId: string;
}) => {
  const file = createWriteStream(
    `${process.env.AUDIO_BASE_PATH}${videoId}.m4a`
  );
  return stream.pipe(file);
};
export { saveAudioFile };
