import { useEffect, useState } from "react";
import SearchBar from "./components/search_bar/search_bar";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import SideBar from "./components/side_bar/side_bar";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />
      <SideBar />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
