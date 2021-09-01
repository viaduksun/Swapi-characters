import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.imgWrapper}>
          <img src="./img/logo.jpg" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
