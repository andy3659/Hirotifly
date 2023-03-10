import { initFirebase } from "./initFirebase";
import { child, get, getDatabase, ref } from "firebase/database";

const audioExist = async (videoId: string): Promise<boolean> => {
  const firebase = initFirebase();
  const db = getDatabase(firebase);
  let result = false;
  const data = await get(child(ref(db), "Music/" + videoId));
  if (data.exists()) {
    result = true;
  }
  return result;
};
export { audioExist };
