import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <ul className={`${displayType}`}>
      {videos.map((item) => (
        <VideoItem
          key={item.id}
          video={item}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};
export default VideoList;
