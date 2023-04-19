import { musicObject } from "../types";
import config from "../config.json";
const API_BASE_URL = config.apiBaseUrl;

const musicApi = {
  async searchMusic(keyword: string): Promise<musicObject[]> {
    if (keyword.trim() == "") return [];
    let hasil: musicObject[] = [];
    const urlString = API_BASE_URL + "search/" + keyword;
    const url = encodeURI(urlString);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      hasil = data;
    } catch (error) {
      console.log(error);
    }
    return hasil;
  },
};

export default musicApi;
