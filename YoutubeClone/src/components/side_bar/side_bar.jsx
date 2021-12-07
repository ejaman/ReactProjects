import React from "react";
import styles from "./side_bar.module.css";

const SideBar = (props) => {
  return (
    <div className={styles.side}>
      <li className={styles.memu}>
        <a title="home" href="/">
          <i className="fas fa-home"></i>
          <span className={styles.name}>Home</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a title="explore" href="/">
          <i className="fas fa-compass"></i>
          <span className={styles.name}>Explore</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a title="subscribe" href="/">
          <i className="fab fa-youtube-square"></i>
          <span className={styles.name}>Subscription</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a title="mostPopular" href="/">
          <i className="fab fa-youtube"></i>
          <span className={styles.name}>Most popular</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a title="mostPopular" href="/">
          <i className="fas fa-thumbs-up"></i>
          <span className={styles.name}>Most popular</span>
        </a>
      </li>
      <li className={styles.line}></li>
      <li className={styles.memu}>
        <a title="mostPopular" href="https://github.com/ejaman/ReactProjects">
          <i className="fab fa-youtube-square"></i>
          <span className={styles.name}>Code</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a title="mostPopular" href="https://github.com/ejaman">
          <i className="fab fa-github"></i>
          <span className={styles.name}>GitHub</span>
        </a>
      </li>
      <li className={styles.line}></li>
      <li className={styles.sub}>SUBSCRIPTIONS</li>
      <li className={styles.memu}>
        <a
          title="subscriptions"
          href="https://www.youtube.com/c/%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9by%EC%97%98%EB%A6%AC"
        >
          <i className="fas fa-user-circle"></i>
          <span className={styles.name}>드림코딩 by 엘리</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a
          title="subscriptions"
          href="https://www.youtube.com/c/%EA%BF%80%ED%82%A4%ED%95%98%EC%9A%B0%EC%8A%A4"
        >
          <i className="far fa-user-circle"></i>
          <span className={styles.name}>꿀키</span>
        </a>
      </li>
      <li className={styles.memu}>
        <a
          title="subscriptions"
          href="https://www.youtube.com/c/SBSTV%EB%8F%99%EB%AC%BC%EB%86%8D%EC%9E%A5x%EC%95%A0%EB%8B%88%EB%A9%80%EB%B4%90"
        >
          <i className="fas fa-user-circle"></i>
          <span className={styles.name}>동물농장 & 애니멀바</span>
        </a>
      </li>
    </div>
  );
};

export default SideBar;
