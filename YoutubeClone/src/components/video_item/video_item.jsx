import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumb}
        src={snippet.thumbnails.standard.url}
        alt="video thumb"
      />
      <div className={styles.info}>
        {/* 채널 썸넬도 가져오기 */}
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
        <p className={styles.published}>{snippet.publishedAt}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
