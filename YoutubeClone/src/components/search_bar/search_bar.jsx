import React, { useRef } from "react";
import styles from "./search_bar.module.css";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  // 각각 이벤트를 받아서 처리
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.header}>
      <button className={styles.bar}>☰</button>
      <a href="https://www.youtube.com" title="youtube">
        <div className={styles.logo}>
          <img className={styles.logoImg} src="./images/logo.png" alt="logo" />
          <span className={styles.logotxt}>Yotube</span>{" "}
        </div>
      </a>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.searchBtn} type="submit" onClick={onClick}>
        <img
          className={styles.searchImg}
          src="./images/search.png"
          alt="search"
        />
      </button>
    </div>
  );
};

export default SearchBar;
