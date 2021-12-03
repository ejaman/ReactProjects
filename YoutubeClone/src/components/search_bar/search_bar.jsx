import React, { useRef } from "react";
import styles from "./search_bar.module.css";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    // inputRef.current.value = "";
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
      <div className={styles.logo}>
        <button className={styles.bar}>☰</button>
        <img className={styles.logoImg} src="./images/logo.png" alt="logo" />
        <span className={styles.logotxt}>Yotube</span>
      </div>

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
