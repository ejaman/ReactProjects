import axios from "axios";

class Youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 32,
        regionCode: "KR",
      },
    });
    return response.data.items;
  }
  async search(query) {
    const response = await this.client.get("search", {
      params: {
        part: "snippet",
        maxResults: 32,
        type: "video",
        q: query,
        regionCode: "KR",
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
