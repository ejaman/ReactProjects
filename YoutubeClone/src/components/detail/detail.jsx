import React from "react";
import styles from "./detail.module.css";

const Detail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      title="youtube video player"
      type="text/html"
      width="100%"
      height="600"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    />
    <h2>{snippet.title}</h2>
    <p>{snippet.publishedAt}</p>
    <div className={styles.line}>
      <h3>{snippet.channelTitle}</h3>
      <p>{snippet.description}</p>
    </div>
  </section>
);

export default Detail;
