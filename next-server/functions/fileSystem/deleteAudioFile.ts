import fs from "fs";
// import path from "path";
const deleteAudioFile = (videoId: string) => {
  // const audioPath = path.join(process.cwd(), process.env.AUDIO_BASE_PATH!);
  const filePath = `${process.env.AUDIO_BASE_PATH}${videoId}.m4a`;
  fs.unlink(filePath, (err) => {
    if (err && err.code == "ENOENT") {
      console.info("File doesn't exist, won't remove it.");
    } else if (err) {
      console.error("Error occurred while trying to remove file");
    } else {
      console.log(`${videoId}.m4a file deleted from local storage.`);
    }
  });
};
export { deleteAudioFile };
