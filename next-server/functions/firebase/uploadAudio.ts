import { getStorage, ref, uploadBytes } from "firebase/storage";
import { readFileSync } from "fs";
// import path from "path";
import { initFirebase } from "./initFirebase";
const uploadAudio = async (videoId: string) => {
  const firebase = initFirebase();
  const storage = getStorage(firebase);
  const storageRef = ref(storage, `${videoId}.m4a`);

  // const audioPath = path.join(process.cwd(), process.env.AUDIO_BASE_PATH!);
  const filePath = `${process.env.AUDIO_BASE_PATH}${videoId}.m4a`;

  const audioFile = readFileSync(filePath);

  const result = await uploadBytes(storageRef, audioFile, {
    contentType: "audio/mp4",
  });
  console.log(`${videoId}.m4a uploaded`);
  return result;
};
export { uploadAudio };
