import fs from "fs";
const deleteAudioFile = (videoId: string) => {
  fs.unlink(`${process.env.AUDIO_BASE_PATH}${videoId}.m4a`, (err) => {
    if (err && err.code == "ENOENT") {
      console.info("File doesn't exist, won't remove it.");
    } else if (err) {
      console.error("Error occurred while trying to remove file");
    } else {
      console.log("Local File Deleted");
    }
  });
};
export { deleteAudioFile };
