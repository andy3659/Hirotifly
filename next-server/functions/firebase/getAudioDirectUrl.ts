import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { initFirebase } from "./initFirebase";

const getAudioDirectUrl = async (videoId: string) => {
  const firebase = initFirebase();
  const storage = getStorage(firebase);
  const url = await getDownloadURL(ref(storage, `${videoId}.m4a`));
  return url;
};
export { getAudioDirectUrl };
