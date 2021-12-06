class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=32&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }
  async search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&type=video&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
