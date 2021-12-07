import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video: { snippet }, video, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;

    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={`${styles.video} ${displayType}`}>
          <img
            className={`${styles.thumb} ${displayType}`}
            src={snippet.thumbnails.high.url}
            alt="video thumb"
          />
          <div className={styles.info}>
            {/* 채널 썸넬도 가져오기, 제목이 너무 길때 자르고 ... 나오게 만들기 , 제목이 같으면 리스트에서 뺴기 */}
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            <p className={styles.published}>{snippet.publishedAt}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
