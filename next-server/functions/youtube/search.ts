import yts, { SearchResult } from "yt-search";
import { searchResult } from "../../interfaces/searchResult";
const search = async (keyword: string): Promise<Array<searchResult>> => {
  const r = await yts({ query: keyword, gl: "ID", hl: "en" });
  let count = 0;
  let hasil: Array<searchResult> = [];
  r.videos.forEach((e) => {
    if (count >= 10) return;
    if (e.seconds > 600) return;
    let temp: searchResult = {};
    temp.id = e.videoId;
    temp.title = e.title;
    temp.seconds = e.seconds;
    temp.timestamp = e.timestamp;
    temp.author = e.author.name;
    temp.image = `https://img.youtube.com/vi/${e.videoId}/maxresdefault.jpg`;
    temp.alternativeImage = `https://img.youtube.com/vi/${e.videoId}/hqdefault.jpg`;
    hasil.push(temp);
    count += 1;
  });
  return hasil;
};
export { search };
