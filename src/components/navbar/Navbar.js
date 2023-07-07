import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Navbar  = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
       FEUA3 FORUM PAGE
      </Link>
      <div>    
      <ul className={styles.ulStyle}>
        <li className={styles.li}>
          <a className={styles.aStyle} href="/login">LOGIN</a>
        </li>
        <li className={styles.li}>
          <a className={styles.aStyle} href="/signin">SIGN UP</a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
