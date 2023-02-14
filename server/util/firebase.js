import { initializeApp } from "firebase/app";
import {
  getDatabase,
  child,
  ref as dbRef,
  get,
  update,
} from "firebase/database";
import {
  getStorage,
  getDownloadURL,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";

import * as dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.DATABASE_NAME}.appspot.com`,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

const fb = {
  async audioExist(videoId) {
    var res = false;
    const data = await get(child(dbRef(db), "Music/" + videoId));
    if (data.exists()) {
      res = true;
    }
    return res;
  },

  async getAudioDirectUrl(videoId) {
    var res = "";
    const url = await getDownloadURL(sRef(storage, `${videoId}.m4a`));
    res = url;
    return res;
  },

  async setAudioToDatabase(videoId) {
    const data = await update(dbRef(db, "Music/"), { [videoId]: videoId });
    return data;
  },

  uploadAudio({ audioFile, videoId }) {
    const musicRef = sRef(storage, `${videoId}.m4a`);
    return uploadBytes(musicRef, audioFile, { contentType: "audio/mp4" });
  },
};

export default fb;
