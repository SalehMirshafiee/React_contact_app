import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
          <a href="../../index.html">icon</a> | WE SAVE YOUR NUMBERS, YOU DONT
          HAVE TO USE YOUR BRAIN!
        </p>
      </div>
    </>
  );
}

export default Header;
