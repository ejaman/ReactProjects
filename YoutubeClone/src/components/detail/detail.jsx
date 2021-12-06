/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./detail.module.css";

const Detail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="600"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    />
    <div className={styles.line}>
      <h2>{snippet.title}</h2>
      <p>{snippet.publishedAt}</p>
    </div>
    <h3>{snippet.channelTitle}</h3>
    <p>{snippet.description}</p>
  </section>
);

export default Detail;
