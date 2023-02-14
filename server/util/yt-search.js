import yts from "yt-search";

const ytsr = {
  async search(keyword) {
    const r = await yts({ query: keyword, gl: "ID", hl: "en" });
    let count = 0;
    let hasil = [];
    r.videos.forEach((e) => {
      if (count >= 10) return;
      if (e.seconds > 600) return;
      let temp = {};
      temp.id = e.videoId;
      temp.title = e.title;
      temp.seconds = e.seconds;
      temp.timestamp = e.timestamp;
      temp.author = e.author.name;
      temp.image = `https://img.youtube.com/vi/${e.videoId}/maxresdefault.jpg`;
      temp.alternativeImage = `https://img.youtube.com/vi/${e.videoId}/hqdefault.jpg`;
      // console.log(temp);
      hasil.push(temp);
      count += 1;
    });

    // console.log("jalan", hasil);
    return hasil;
  },
};

export default ytsr;
