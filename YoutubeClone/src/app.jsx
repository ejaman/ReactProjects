import { useEffect, useState } from "react";
import SearchBar from "./components/search_bar/search_bar";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&type=video&regionCode=KR&key=AIzaSyCdKNDLgpxvybCQp_i6LuubN0cnwnCqIxQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error)); // id 변환을 위해 한 단계추가
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=32&regionCode=KR&key=AIzaSyCdKNDLgpxvybCQp_i6LuubN0cnwnCqIxQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
