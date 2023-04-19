import { getDatabase, ref, update } from "firebase/database";
import { initFirebase } from "./initFirebase";

const setAudioToDatabase = async (videoId: string) => {
  const firebase = initFirebase();
  const db = getDatabase(firebase);
  const data = await update(ref(db, "Music/"), { [videoId]: videoId });
  console.log(`${videoId} added to database.`);
  return data;
};
export { setAudioToDatabase };
