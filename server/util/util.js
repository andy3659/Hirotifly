import fb from "./firebase.js";
import fs from "fs";
const util = {
  downloadAudio({ stream, videoId }) {
    const file = fs.createWriteStream(
      `${process.env.AUDIO_BASE_PATH}${videoId}.m4a`,
      {
        emitClose: false,
      }
    );
    stream.pipe(file);
    return file;
  },

  uploadAudio(videoId) {
    const audioFile = fs.readFileSync(
      `${process.env.AUDIO_BASE_PATH}${videoId}.m4a`
    );
    return fb.uploadAudio({ audioFile, videoId });
  },
  deleteLocalAudio(videoId) {
    fs.unlink(`${process.env.AUDIO_BASE_PATH}${videoId}.m4a`, (err) => {
      if (err && err.code == "ENOENT") {
        console.info("File doesn't exist, won't remove it.");
      } else if (err) {
        console.error("Error occurred while trying to remove file");
      } else {
        console.log("Local File Deleted");
      }
    });
  },
  async assignAudioToFirebase({ stream, videoId }) {
    this.downloadAudio({ stream, videoId }).on("finish", () => {
      console.log("Download Complete");
      this.uploadAudio(videoId).then((snapshot) => {
        console.log("Upload Complete");
        this.deleteLocalAudio(videoId);
        fb.setAudioToDatabase(videoId);
      });
    });
  },
};

export default util;
