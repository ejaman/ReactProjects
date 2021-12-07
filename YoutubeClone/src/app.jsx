import { useCallback, useEffect, useState } from "react";
import SearchBar from "./components/search_bar/search_bar";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import SideBar from "./components/side_bar/side_bar";
import Detail from "./components/detail/detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const displayType = selectedVideo ? styles.list : styles.grid;
  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      // 로딩스페너 넣을거면 여기에
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
        });
    },
    [youtube]
  );

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />
      {!selectedVideo && <SideBar />}
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Detail video={selectedVideo} />
          </div>
        )}
        <div className={`${displayType}`}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "gird"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
